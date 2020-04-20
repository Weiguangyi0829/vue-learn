import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'product',
      component: () => import('@/components/product'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/components/order'),
    }
  ]
})
