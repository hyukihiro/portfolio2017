<template>
  <div class="wrapper detail js-container">
    <main class="main" v-if="single[0]">
      <div class="fv">
        <div class="img"><img :src="single[0].featured_image.src"></div>
        <h2 class="project-name js-proj-name"><span>{{ single[0].acf.project_name }}</span></h2>
        <div class="bg" :style="{ 'background-color': single[0].acf.key_color }"></div>
      <!-- fv --></div>

      <div class="details js-scroll-target" id="content">
        <div class="details__wrap">
          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">Overview</dt>
              <dd class="details__body">
                <p class="details__txt" v-html="single[0].acf.overview"></p>
              </dd>
            </dl>
          <!-- details__item --></div>

          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">HighLights</dt>
              <dd class="details__body">
                <ul class="details__list">
                  <li v-html="single[0].acf.highlights"></li>
                </ul>
              </dd>
            </dl>
            <dl class="details__unit">
              <dt class="details__head">Roles</dt>
              <dd class="details__body">
                <p class="details__txt">{{ single[0].acf.roles }}</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Technologies</dt>
              <dd class="details__body">
                <p class="details__txt">{{ single[0].acf.technologies }}</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Launch</dt>
              <dd class="details__body">
                <p class="details__txt"><a :href="single[0].acf.launch" target="_blank">View This Site</a></p>
              </dd>
            </dl>
          <!-- details__item --></div>
        <!-- details__wrap --></div>
      <!-- details --></div>

      <div class="site-flow">
        <div class="item item--prev">
          <div class="img"><img :src="single[0].prev.featured_image_src"></div>
          <div class="bg"></div>
          <router-link :to="{ path: '/' + single[0].prev.post_name}">
            <h3 class="item__hdg">Prev Project</h3>
            <p class="item__name">{{ single[0].prev.post_title }}</p>
          </router-link>
        <!-- prev --></div>
        <div class="item item--next">
          <div class="img"><img :src="single[0].next.featured_image_src"></div>
          <div class="bg"></div>
          <router-link :to="{ path: '/' + single[0].next.post_name}">
            <h3 class="item__hdg">Next Project</h3>
            <p class="item__name">{{ single[0].next.post_title }}</p>
          </router-link>
        <!-- next --></div>
      <!-- site-flow --></div>

    <!-- main --></main>
  </div>
</template>

<script>
// setting
import { HTTP } from '../environment';

// js
export default {
  name: 'detail',

  data() {
    return {
      single: {}
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route' (to, from) {
      this.fetchData();
    }
  },

  // beforeRouteUpdate (to, from, next) {
  //   console.log('in from beforeRouteUpdate');
  // },

  methods: {
    fetchData() {
      HTTP.get('wp-json/wp/v2/posts?slug=' + this.$route.path)
      .then((resp) => {
        this.single = resp.data;
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/sass/_mixin.scss';

.detail {
  position: relative;

  .fv {
    position: relative;
    width: 100vw;
    height: 70vh;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    .img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    .img img {
      position: absolute;
      left: 50%;
      top: 0;
      width: 100vw;
      height: auto;
      transform: translateX(-50%);
    }

    .project-name {
      overflow: hidden;
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      font-size: 4.8rem;
      z-index: 3;
      line-height: 1.5;
    }

    .project-name span {
      display: inline-block;
    }

    .scroll a {
      position: absolute;
      left: 50%;
      bottom: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      transform: translateX(-50%);
      color: #fff;
      height: 80px;
    }

    .scroll__txt {
      display: flex;
    }

    .scroll__line {
      display: inline-block;
      width: 1px;
      height: 40px;
      background: #fff;
    }

    .bg {
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #1363e6;
      opacity: .9;
    }
  }

  .details {
    width: 100%;
    margin: 0 auto;
    padding: 80px 40px;

    &__wrap {
      display: flex;
    }

    &__item {
      width: 50%;
      padding: 0 40px;
    }

    &__list {
      font-size: 1.4rem;
    }


    &__unit + .details__unit {
      margin-top: 50px;
    }

    &__head {
      position: relative;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 10px;
    }

    &__head::after {
      content: "";
      display: inline-block;
      position: absolute;
      left: -30px;
      top: 50%;
      width: 20px;
      height: 2px;
      background: #000;
      transform: translateY(-50%);
    }

    &__txt {
      font-size: 1.4rem;
      line-height: 2.25;
      font-weight: 400;
    }

    &__txt a {
      position: relative;
    }

    &__txt + .details__txt {
      margin-top: 20px;
    }

    &__txt a::after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #000;
      transform: scaleX(0);
      transition: transform .5s cubic-bezier(.19, 1, .22, 1);
      transform-origin: 100% 50%;
    }

    &__list {
      line-height: 2.5;
    }
  }

  .site-flow {
    display: flex;
    flex-wrap: wrap;

    .item {
      overflow: hidden;
      position: relative;
      width: 50%;
    }

    .item .bg {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .8);
      transition: background 1s cubic-bezier(.19, 1, .22, 1);
    }

    .item .img img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      pointer-events: none;
      z-index: 0;
      width: 100%;
      height: auto;
    }


    .item a {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 80px;
      font-size: 1.6rem;
    }

    .item__name, .item__hdg {
      line-height: 1.2;
      background: rgba(255, 255, 255, 0);
      transition: background 1s cubic-bezier(.19, 1, .22, 1);
    }

    .item__name {
      font-weight: 500;
      font-size: 2.0rem;
    }
  }

  // variation
  .site-flow {

    .item--next a {
      align-items: flex-end;
    }
  }
}

/* animation
--------------------------------------------------------------------------*/
// .detail .fv .scroll__txt span {
//   opacity: 0;
//   transform: translateY(20px);
// }
//
// .detail .fv .scroll__line {
//   opacity: 0;
//   transform: translateY(40px);
// }




/* hover
--------------------------------------------------------------------------*/
.mode-pc .detail .details__txt a:hover::after {
  transform: scaleX(1);
  transition: transform .5s cubic-bezier(.19, 1, .22, 1);
  transform-origin: 0 50%;
}

.mode-pc .detail {
  .site-flow {

    .item:hover .bg {
      background: rgba(216, 216, 216, 0);
      transition: background 2s cubic-bezier(.19, 1, .22, 1);
      backface-visibility: hidden;
    }

    .item:hover .item__name, .item:hover .item__hdg {
      background: rgba(255, 255, 255, 1);
      transition: background 1s cubic-bezier(.19, 1, .22, 1);
    }
  }
}


/* xl
--------------------------------------------------------------------------*/
@include mq(xl) {
  .detail {
    .details {
      width: 140rem;
    }

    .site-flow {
      &__inner {
        width: 120rem;
        margin: 0 auto;
      }
    }
  }
}


/* sp
--------------------------------------------------------------------------*/
@include mq(sp) {
  .detail {

    .fv {
      .project-name {
        font-size: 3.0rem;
        left: 20px;
        width: 90%;
      }

      .img img {
        width: auto;
        height: 100vh;
      }

      .scroll a {
        height: 60px;
      }
    }

    .details {
      width: 100%;
      margin: 0 auto;
      padding: 40px 20px;

      &__wrap {
        flex-wrap: wrap;
      }

      &__item {
        width: 100%;
        padding: 0 20px;
      }

      &__item + .details__item {
        margin-top: 25px;
      }

      &__list {
        font-size: 1.2rem;
      }

      &__unit + .details__unit {
        margin-top: 25px;
      }

      &__head {
        font-size: 1.4rem;
      }

      &__head::after {
        left: -20px;
        width: 10px;
      }

      &__txt {
        font-size: 1.2rem;
      }
    }

    .site-flow {

      .item {
        width: 100%;
      }

      .item + .item {
        border-top: 1px solid #eee;
      }

      .item a {
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-size: 1.8rem;
      }

      .item .item__hdg {
        font-size: 1.4rem
      }

      .item .item__name {
        font-size: 1.2rem
      }
    }
  }
}
</style>
