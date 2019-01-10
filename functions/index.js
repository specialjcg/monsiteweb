const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');



sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
  .document('adresse/{userId}')
  .onCreate((doc,event) => {

    const userId = event.params.userId;

    const db = admin.firestore();

    return db.collection('adresse').doc(userId)
      .get()
      .then(doc => {

        const user = doc.data();
        const textemail = user.adressmail+' '+user.message+' '+user.nom;
        sgMail.setSubstitutionWrappers('{{', '}}')

        const msg = { to: "jc.gouleau@gmail.com", from: user.adressmail, subject: "New Follower", templateId: "d-3e82c01992bb4e97b520e49f7e402490",
           dynamicTemplateData: { email: textemail } };


        return sgMail.send(msg);
      })
      .then(() => console.log('email sent!'))

      .catch(err => console.log(err));


  });
