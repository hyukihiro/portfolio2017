<template>
  <div id="app">
    <div class="wrapper index">

      <global-loading></global-loading>

      <global-header></global-header>

      <global-menu></global-menu>

      <transition name="page">
        <router-view></router-view>
      </transition>

      <global-footer></global-footer>

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      posts: []
    }
  }
}
</script>
