import $ from 'jquery';

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router'

// js
import controller from './assets/js/_module/_controller';
import PageView from './assets/js/_module/_pageView';
import Menu from './assets/js/_module/_menu';
import Loading from './assets/js/_module/_loading';
import Scroller from './assets/js/_module/_scroller';
import './assets/sass/index.scss';

// pages
import App from './app.vue'

// HTTP
import { HTTP } from './environment';

// components
import GlobalHeader from './components/_globalHeader.vue';
Vue.component('global-header', GlobalHeader);
import GlobalLoading from './components/_globalLoading.vue';
Vue.component('global-loading', GlobalLoading);
import Globalmenu from './components/_globalMenu.vue';
Vue.component('global-menu', Globalmenu);
import GlobalFooter from './components/_globalFooter.vue';
Vue.component('global-footer', GlobalFooter);

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,

  data: {
    source: 'http://portfolio-wp.eggplant.work/',
    url: 'http://portfolio.eggplant.work/',
    posts: [],
    weatherMain: ''
  },

  created(){
    //postを取得
    HTTP.get('wp-json/wp/v2/posts')
    .then(response => {
      this.posts = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  }
})

$(() => {
  new PageView();
  new Loading();
  new Menu();

  console.log("%cAll about this site, please check the repository below","padding:4px; background: #333; color: #fff");
  console.log("%chttps://github.com/hyukihiro/portfolio2017","padding:4px; background: #333; color: #fff");
  console.log("%cSpecial Thanks K.I and Y.W","padding:4px; background: #333; color: #fff");
});
