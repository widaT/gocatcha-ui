import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-1',
      component: () => import('./../views/useOnline/UseOnline.vue')
    },
    {
      path: '/useOnline',
      name: 'useOnline',
      component: () => import('./../views/useOnline/UseOnline.vue'),
      redirect: '/useOnline/sliderFixed',
      children: [
        { path: 'sliderPop', name: 'sliderPop', component: () => import('./../views/useOnline/SliderPop.vue') },
        { path: 'sliderFixed', name: 'sliderFixed', component: () => import('./../views/useOnline/SliderFixed.vue') }
      ]
    }
  ]
})
