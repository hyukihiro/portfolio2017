import $ from 'jquery';
import Vue from 'vue';
// import VueRouter from 'vue-router';
import axios from'axios';
import controller from './_module/_controller';
import PageView from './_module/_pageView';
import Fv from './_module/_fv';
import { date, weather } from './_module/_meta';
import Menu from './_module/_menu';
import Loading from './_module/_loading';
import Scroller from './_module/_scroller';
import Works from './_module/_works';

let app = new Vue({
  el: '#app',

  data: {
    source: 'http://portfolio-wp.eggplant.work/',
    url: 'http://portfolio.eggplant.work/',
    posts: []
  },

  methods: {
    media: function(id){
      axios.get(this.source+'/wp-json/wp/v2/media/'+id)
      .then(response => {
        this.media = response.data
      })
      .catch(e => {
        this.errors.push(e)
      });
      return '';
    },
  },

  created(){

    //postを取得
    axios.get(this.source+'wp-json/wp/v2/posts?_embed')
    .then(response => {
      this.posts = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });

  },
})

$(() => {
  new PageView();
  Fv();
  date();
  weather();
  new Menu();
  new Loading();
  new Scroller();
  new Works();

  console.log("%cSpecial Thanks K.I","padding:4px; background: #333; color: #fff");
  // console.log("%cTake a look to the code on github : http://github.com/ivandaum/ivandaum","padding:3px; background: #000; color: #fff");
  console.log('');

});
