<template>
  <div class="menu">
    <div class="l-wrap menu__inner">

      <ul class="menu__lists" v-if="$root.posts && $root.posts.length">
        <li class="menu__item js-link" v-for="post of $root.posts"><a v-bind:href="'/#/' + post.slug">
          {{ post.acf.project_name }}
        </a><!-- m-lists__item --></li>
      <!-- lists --></ul>

      <nav class="menu__navigation">
        <ul>
          <li class="js-btn"><router-link to="/" exact>
            <span>Works</span>
            <span>Works</span>
          </router-link></li>
          <li class="js-btn"><router-link to="/about">
            <span>About</span>
            <span>About</span>
          </router-link></li>
          <li class="js-btn"><span class="disable">
            <span>Lab</span>
            <span>Lab</span>
          </span></li>
        </ul>
      <!-- navigarion --></nav>
    <!-- l-wrap --></div>
    <audio id="js-sound" preload="auto">
      <source src="/assets/sound/sound01.mp3" type="audio/mp3">
    </audio>
  <!-- menu --></div>
</template>
