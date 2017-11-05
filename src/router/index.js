import Vue from 'vue'
import Router from 'vue-router'
import detail from '../pages/detail.vue'
import about from '../pages/about.vue'
import works from '../pages/works.vue'

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'works',
      component: works
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
