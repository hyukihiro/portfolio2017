<template>
  <div id="app">

    <global-header></global-header>

    <global-menu></global-menu>

    <main class="main">
      <div class="introduction">
        <div class="meta">
          <ul class="meta__cat meta__cat--geo">
            <li class="meta__item">Shiga</li>
            <li class="meta__item">Japan</li>
            <li class="meta__item">
              <span class="minute"></span>
              <span class="colon">:</span>
              <span class="second"></span>
            </li>
          </ul>
          <ul class="meta__cat meta__cat--weather">
            <li class="meta__item">Clear Sky</li>
          </ul>
        <!-- meta --></div>
        <div class="prof">
          <div class="prof__inner">
            <p class="txt">
              Hello,  I am Yukihiro Hoshide,  a Front-end developer born in Japan. <br>
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

    <global-footer></global-footer>

  <!-- #app --></div>
</template>

<script>
import GlobalHeader from '../components/_globalHeader.vue';
import GlobalLoading from '../components/_globalLoading.vue';
import Globalmenu from '../components/_globalMenu.vue';
import GlobalFooter from '../components/_globalFooter.vue';

export default {
  name: 'about',

  data() {
    return {
      posts: []
    }
  },
}
</script>
