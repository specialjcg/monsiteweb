<template>
  <div id="blog-home">
      <h1>{{ page_title }}</h1>
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure>
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if their is a `featured_image` -->
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div>
  </div>
</template>
<script>
import Butter from 'buttercms';
const butter = Butter('3f5c64aafe7b06d66ae87d3b39660c73d8c0afec');
export default {

    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
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
