<template>
  <div class="wrapper">
    <main class="main">
      <div class="fv">
        <h2 class="project-name js-proj-name"><span>Seiban</span></h2>
        <div class="scroll"><a href="" data-scroller="#content" class="js-scroller">
          <span class="scroll__txt">
            <span>S</span>
            <span>c</span>
            <span>r</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
          </span>
          <span class="scroll__line"></span>
        </a><!-- scroll --></div>
        <div class="bg"></div>
      <!-- fv --></div>

      <div class="details js-scroll-target" id="content">
        <div class="details__wrap">
          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">Overview</dt>
              <dd class="details__body">
                <p class="details__txt">Seiban is the industry leader in Japanese scroolbag “randoseru”.</p>
                <p class="details__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </dd>
            </dl>
          <!-- details__item --></div>

          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">HighLights</dt>
              <dd class="details__body">
                <ul class="details__list">
                  <li>・Largescale website building</li>
                  <li>・Full responsive web design</li>
                  <li>・Connecting to EC website</li>
                  <li>・Tuning every assets to improve page speed</li>
                </ul>
              </dd>
            </dl>
            <dl class="details__unit">
              <dt class="details__head">Roles</dt>
              <dd class="details__body">
                <p class="details__txt">Front-end Development</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Technologies</dt>
              <dd class="details__body">
                <p class="details__txt">HTML, SCSS, JS, Gulp</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Launch</dt>
              <dd class="details__body">
                <p class="details__txt"><a href="https://www.seiban.co.jp/" target="_blank">View This Site</a></p>
              </dd>
            </dl>
          <!-- details__item --></div>
        <!-- details__wrap --></div>
      <!-- details --></div>

      <div class="site-flow">
        <dl class="item item--prev"><a href="">
          <dt class="item__hdg">Prev Project</dt>
          <dd class="item__name">GFC</dd>
          </a><!-- prev --></dl>
        <dl class="item item--next"><a href="">
          <dt class="item__hdg">Next Project</dt>
          <dd class="item__name">GFC</dd>
        </a><!-- next --></dl>
      <!-- site-flow --></div>

    <!-- main --></main>
  </div>
</template>

<script>
// components
import GlobalHeader from '../components/_globalHeader.vue';
import GlobalLoading from '../components/_globalLoading.vue';
import Globalmenu from '../components/_globalMenu.vue';
import GlobalFooter from '../components/_globalFooter.vue';

export default {
  name: 'detail',

  data() {
    return {
      post: []
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      if ( this.$route.params.id === undefined ) { // if there is no slug, we're at the home page so we need to fetch it
        HTTP.get('wp-json/wp/v2/pages?slug=front-page')
        .then((resp) => {
          this.page = resp.data[0]
        })
        .catch((err) => {
          console.log(err)
        })

      } else {
        HTTP.get('wp-json/wp/v2/pages?slug='+this.$route.params.id) // if we're not at the home page, then we grab the page via its slug
        .then((resp) => {
          this.page = resp.data[0]
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>
