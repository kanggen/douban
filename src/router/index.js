import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'
import Lists from '@/components/Lists/Lists'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
