<template>
  <div class="wrapper detail">
    <main class="main">
      <div class="fv">
        <div class="img"><img :src="posts[0].featured_image.src"></div>
        <h2 class="project-name js-proj-name"><span>{{ posts[0].acf.project_name }}</span></h2>
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
        <div class="bg" :style="{ 'background-color': posts[0].acf.key_color }"></div>
      <!-- fv --></div>

      <div class="details js-scroll-target" id="content">
        <div class="details__wrap">
          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">Overview</dt>
              <dd class="details__body">
                <p class="details__txt">{{ posts[0].acf.overview }}</p>
              </dd>
            </dl>
          <!-- details__item --></div>

          <div class="details__item">
            <dl class="details__unit">
              <dt class="details__head">HighLights</dt>
              <dd class="details__body">
                <ul class="details__list">
                  <li v-html="posts[0].acf.highlights"></li>
                </ul>
              </dd>
            </dl>
            <dl class="details__unit">
              <dt class="details__head">Roles</dt>
              <dd class="details__body">
                <p class="details__txt">{{ posts[0].acf.roles }}</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Technologies</dt>
              <dd class="details__body">
                <p class="details__txt">{{ posts[0].acf.technologies }}</p>
              </dd>
            </dl>

            <dl class="details__unit">
              <dt class="details__head">Launch</dt>
              <dd class="details__body">
                <p class="details__txt"><a :href="posts[0].acf.launch" target="_blank">View This Site</a></p>
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
// setting
import { HTTP } from '../environment';

// js
import $ from 'jquery';
import Works from '../assets/js/_module/_works';

export default {
  name: 'detail',

  data() {
    return {
      posts: []
    }
  },

  created() {
    new Works();
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      HTTP.get('wp-json/wp/v2/posts?slug=' + this.$route.path)
      .then((resp) => {
        this.posts = resp.data;
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped

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
      position: relative;
    }

    .img img {
      position: absolute;
      left: 0;
      top: 0;
      width: auto;
      height: 70vh;
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
      transform: translateX(0);
    }

    &__list {
      line-height: 2.5;
    }
  }

  .site-flow {

    .item a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 40px 80px;
      font-size: 2.4rem;
    }

    .item__name {
      font-weight: 500;
    }
  }

  // variation
  .site-flow {

    .item--prev a {
      background: #1363e6;
    }

    .item--next a {
      flex-direction: row-reverse;
      background: #d8d8d8;
    }
  }
}

/* animation
--------------------------------------------------------------------------*/
.detail .fv .scroll__txt span {
  opacity: 0;
  transform: translateY(20px);
}

.detail .fv .scroll__line {
  opacity: 0;
  transform: translateY(40px);
}


/* hover
--------------------------------------------------------------------------*/
.detail .details__txt a:hover::after {
  transform: translateX(1);
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
        font-size: 4.0rem;
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

      .item a {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-size: 1.8rem;
      }
    }

    // variation
    .site-flow {

      .item--next a {
        flex-direction: column;
      }
    }
  }
}
</style>
