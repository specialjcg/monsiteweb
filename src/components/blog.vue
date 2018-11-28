<template>
  <div>

  <div id="content" class="clearfix">
      <section id="left-sidebar">
        <p>Left Sidebar Content Goes Here</p>
      </section>

      <section id="right">
        <p>Right Side Content Goes Here</p>
      </section>
    </div>

    <footer>
      <p>Some copyright and legal notices gere. May be use the © symbol a bit.</p>
    </footer>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#content {
  display: block;
  clear: both;
  margin-top: 5vw;
  margin-bottom: 5vw;
  min-height: 500px;
}

#left-sidebar {
  width: 35%;
  float: left;
  margin: 0 15px;
  background: #ccc;
  min-height: 500px;
  text-align: center;
}
#right {
  float: right;
  width: 62%;
  background: #efefef;
  text-align: center;
  min-height: 500px;
}
footer{text-align: center;}
/* clearfix */
.clearfix:after {
  content: '.';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.clearfix {
  display: inline-block;
}

html[xmlns] .clearfix {
  display: block;
}
* html .clearfix {
  height: 1%;
}
</style>
