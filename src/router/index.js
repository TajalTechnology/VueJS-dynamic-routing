import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ProfileView from '@/components/ProfileView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
    ,
    {
      path: '/profile/:user_id',
      name: 'ProfileView',
      component: ProfileView
    }
  ]
})
