import $ from 'jquery';

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import axios from'axios';
// import routes from './routes'
import router from './router'

// js
import controller from './assets/js/_module/_controller';
import PageView from './assets/js/_module/_pageView';
// import Fv from './assets/js/_module/_fv';
import Menu from './assets/js/_module/_menu';
import Loading from './assets/js/_module/_loading';
import Scroller from './assets/js/_module/_scroller';
import Works from './assets/js/_module/_works';

// pages
import App from './app.vue'

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
    posts: []
  },

  // methods: {
  //   media: function(id){
  //     axios.get(this.source+'/wp-json/wp/v2/media/'+id)
  //     .then(response => {
  //       this.media = response.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     });
  //     return '';
  //   },
  // },

  // created(){
  //   //postを取得
  //   axios.get(this.source+'wp-json/wp/v2/posts?_embed')
  //   .then(response => {
  //     this.posts = response.data;
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   });
  //
  // },
})

$(() => {
  new PageView();
  // Fv();
  new Menu();
  new Loading();
  new Scroller();
  new Works();

  console.log("%cSpecial Thanks K.I","padding:4px; background: #333; color: #fff");
  // console.log("%cTake a look to the code on github : http://github.com/ivandaum/ivandaum","padding:3px; background: #000; color: #fff");
  console.log('');

});
