<template>
  <div id="app">
    <div class="wrapper index">

      <global-loading></global-loading>

      <global-header></global-header>

      <global-menu></global-menu>

      <router-view></router-view>

      <global-footer></global-footer>

    </div>
  </div>
</template>

<script>
// setting
import { HTTP } from './environment';

export default {
  name: 'app',
  // created() {
  //   this.fetchData()
  // },

  data() {
    return {
      posts: []
    }
  },

  // watch: {
  //   '$route': 'fetchData'
  // },

  // methods: {
  //   fetchData() {
  //     if ( this.$route.params.id === undefined ) { // if there is no slug, we're at the home page so we need to fetch it
  //       HTTP.get('wp-json/wp/v2/posts?_embed')
  //       .then((resp) => {
  //         this.posts = resp.data;
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })

  //     } else {
  //       console.log('in');
  //       HTTP.get('wp-json/wp/v2/posts') // if we're not at the home page, then we grab the page via its slug
  //       .then((resp) => {
  //         this.posts = resp.data[0]
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>


</style>
