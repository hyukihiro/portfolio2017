<template>
  <global-loading></global-loading>

  <global-header></global-header>

  <global-menu></global-menu>

  <router-view></router-view>

  <main class="main">
    <ul class="m-lists" v-if="posts && posts.length">
      <li class="m-lists__item" v-for="post of posts"><a v-bind:href="url + post.slug">
        <div class="image"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" alt=""></div>
        <div class="content">
          <div class="txt">
            <h2 class="name">{{post.title.rendered}}</h2>
            <ul class="skills">
              <li>{{post.acf.technologies}}</li>
            </ul>
          </div>
        <!-- content --></div>
      </a><!-- m-lists__item --></li>
    <!-- lists --></ul>
  <!-- main --></main>

  <global-footer></global-footer>
</template>

<script>
import GlobalHeader from '../components/_globalHeader.vue';
import GlobalLoading from '../components/_globalLoading.vue';
import Globalmenu from '../components/_globalMenu.vue';
import GlobalFooter from '../components/_globalFooter.vue';
export default {
  components: {
    GlobalHeader,
    GlobalLoading,
    Globalmenu,
    GlobalFooter
  }
}
</script>
