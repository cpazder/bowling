import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Scores from '@/components/Scores/Scores'
import Addscores from '@/components/Scores/Addscores'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Schedule from '@/components/User/Schedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Scores',
      name: 'Scores',
      component: Scores
    },
    {
      path: '/Addscores',
      name: 'Addscores',
      component: Addscores
    },
    {
      path: '/Users',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: Schedule
    }
  ],
  mode: 'history'
})
