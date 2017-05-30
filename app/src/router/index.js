import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from 'src/pages/Home'
import Video from 'src/pages/Video'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'
import Profile from 'src/pages/Profile'
import Upload from 'src/pages/Upload'
import User from 'src/pages/User'
import Category from 'src/pages/Category'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/videos/:id',
    name: 'Video',
    component: Video
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes,
  linkActiveClass: 'active'
})

export default router
