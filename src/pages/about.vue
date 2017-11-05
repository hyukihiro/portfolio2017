<template>
  <div class="wrapper about">
    <main class="main">
      <div class="introduction">
        <div class="meta">
          <ul class="meta__cat meta__cat--geo">
            <li class="meta__item">Shiga</li>
            <li class="meta__item">Japan</li>
            <li class="meta__item">
              <span class="hour">{{ hour }}</span>
              <span class="colon">:</span>
              <span class="minute">{{ minute }}</span>
            </li>
          </ul>
          <ul class="meta__cat meta__cat--weather">
            <li class="meta__item">{{ weather }}</li>
          </ul>
        <!-- meta --></div>
        <div class="prof">
          <div class="prof__inner">
            <p class="txt">
              Hello, I am Yukihiro Hoshide, a Front-end developer born in Japan.<br>
              I am Interested in solving business problems by web technology and<br>
              acquiring new technology, language and application to create an impressive expression.
            </p>
            <p class="txt">
              I want to work in a foreign country because I think environmental change is most effective way to <br> improve my mental strength and web development skills. now is the time to change and put into action.
            </p>
            <ul class="sns">
              <li><a href="https://github.com/hyukihiro" target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/yukihiro-hoshide-b50759149/" target="_blank">LinkedIn</a></li>
              <li><a href="https://codepen.io/yukihiro_hoshide/" target="_blank">Codepen</a></li>
              <li><a href="https://soundcloud.com/yukihiro-hoshide" target="_blank">SoundCloud</a></li>
            </ul>
          <!-- prof --></div>
        <!-- prof --></div>
      <!-- introduction --></div>

      <div class="skills">
        <div class="skills__inner">
          <h2 class="skills__hdg">Skills</h2>
          <ul class="categories">
            <li class="category category--frontent">
              <h3 class="category__hdg">Frontend</h3>
              <ul class="items">
                <li class="item">HTML5 / CSS3</li>
                <li class="item">Sass / Less / Stylus</li>
                <li class="item">Javascript / es2015</li>
                <li class="item">pug / Handlebars</li>
                <li class="item">Gulp / npm script / webpack</li>
                <li class="item">Git / gitflow</li>
                <li class="item">vue.js</li>
                <li class="item">Wordpress / WP REST API</li>
                <li class="item"></li>
              </ul>
            </li>

            <li class="category category--misk">
              <h3 class="category__hdg">Misk</h3>
              <ul class="items">
                <li class="item">openFrameworks</li>
                <li class="item">Unity</li>
                <li class="item">Node.js</li>
                <li class="item">Max / MSP / JITTER</li>
              </ul>
            </li>

            <li class="category category--fun">
              <h3 class="category__hdg">Fun</h3>
              <ul class="items">
                <li class="item">Football</li>
                <li class="item">DJ</li>
                <li class="item">VJ</li>
                <li class="item">Yoga</li>
                <li class="item">Running / Walking</li>
              </ul>
            </li>
          <!-- categories --></ul>
        <!-- skills__inner --></div>
      <!-- skills --></div>
    <!-- main --></main>
  </div>
</template>

<script>

// js
import $ from 'jquery';
import axios from 'axios';
import { date, weather } from '../assets/js/_module/_meta';

export default {
  name: 'about',

  data() {
    return {
      posts: []
    }
  },

  created() {
    this.date();
    this.weather();
  },

  methods: {
    date: function() {
      let time = new Date();
      let hour = time.getHours();
      let minute = time.getMinutes();
      let DOMhour = document.querySelectorAll('.meta__item .hour')
      let DOMminute = document.querySelectorAll('.meta__item .minute')

      if ( minute < 10 ) {
        minute = '0' + minute;
      }

      if ( hour < 10 ) {
        hour = '0' + hour;
      }

      this.hour = hour;
      this.minute = minute;
    },

    weather: function() {
      axios.get("http://api.openweathermap.org/data/2.5/weather?id=1853909&units=metric&appid=2f890cb41f31cbbba489407e0936a6d5")
      .then((resp) => {
        this.weatherMain = resp.data.weather[0].main;
        console.log(this);
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

.about {
  .main {
    margin-top: 100px;
  }

  .introduction {
    padding: 30px 30px 70px;
  }

  .meta__cat {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-size: 1.4rem;
    font-weight: 300;
  }

  .meta__cat + .meta__cat {
    margin-top: 5px;
  }

  .meta__item {
    position: relative;
    padding-left: 20px;
  }

  .meta__item + .meta__item::after {
    content: '/';
    display: inline-block;
    position: absolute;
    left: 5px;
    bottom: 0;
  }

  .meta__item .colon {
    padding: 0 3px;
    animation: flashing 2s steps(2, start) infinite;
  }

  .prof {
    width: 100%;
    padding-top: 60px;
    line-height: 2.5;

    .txt + .txt {
      margin-top: 50px;
    }
  }

  .sns {
    display: flex;
    align-items: center;
    padding-top: 50px;

    li + li {
      padding-left: 30px;
    }
  }

  .skills {
    padding: 70px 30px;
    background: #D8D8D8;

    &__inner {
      width: 100%;
    }

    .skills__hdg {
      font-weight: 500;
      font-size: 2.8rem;
    }

    .categories {
      margin-top: 20px;
      display: flex;
    }

    .category {
      &__hdg {
        font-weight: 400;
        font-size: 2.0rem;
      }

      .items {
        padding-top: 10px;
        font-size: 1.2rem;
        line-height: 2.25;
      }
    }

    .category + .category {
      padding-left: 70px;
    }
  }


  /* xl
  --------------------------------------------------------------------------*/
  @include mq(xl) {
    .main .prof__inner {
      width: 140rem;
      margin: 0 auto;
    }

    .main .skills__inner {
      width: 140rem;
      margin: 0 auto;
    }
  }

  /* sp
  --------------------------------------------------------------------------*/
  @include mq(sp) {
    .introduction {
      padding-bottom: 50px;
    }

    .prof {
      padding-top: 10px;

      .txt + .txt {
        margin-top: 20px;
      }
    }

    .sns {
      padding-top: 30px;
      justify-content: space-between;

      li {
        font-size: 1.2rem;
      }

      li + li {
        padding-left: 10px;
      }
    }

    .skills {
      padding: 30px;

      .skills__hdg {
        font-size: 2.0rem;
      }

      .categories {
        flex-direction: column;
      }

      .category + .category {
        padding-left: 0;
        padding-top: 30px;
      }

      .category__hdg {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
