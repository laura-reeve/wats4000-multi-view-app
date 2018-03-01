import Vue from 'vue'
import VueAnalytics from'vue-ua'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import Secret from '@/components/Secret'

// If you're using vue-router and want route integration, create your routes before enabling vue-ua.
const router = new VueRouter(
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
)

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  // appName: 'Sample Survey',
  // [Required] The version of your app.
  // appVersion: '<app_version>',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-114925962-1',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router
})
