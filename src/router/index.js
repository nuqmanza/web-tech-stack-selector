import Vue from 'vue'
import Router from 'vue-router'
import CatSelector from '@/components/CatSelector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CatSelector',
      component: CatSelector
    }
  ]
})
