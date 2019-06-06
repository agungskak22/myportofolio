import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Gallery from '@/components/pages/Gallery'
import Blog from '@/components/pages/Blog'
import SistemDigital from '@/components/pages/myBlog/sistemDigital'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/sistemdigital',
      name: 'sistemdigital',
      component: SistemDigital
    }
  ]
})
