<template>
  <div id="blog-post">
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('3f5c64aafe7b06d66ae87d3b39660c73d8c0afec');
 export default {
    name: 'blog-post',
    data() {
      return {
        post: null
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    }
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
