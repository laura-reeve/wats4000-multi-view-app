import Vue from 'vue'
import VueAnalytics from'vue-ua'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import Secret from '@/components/Secret'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
      
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    }
  ]
  })



