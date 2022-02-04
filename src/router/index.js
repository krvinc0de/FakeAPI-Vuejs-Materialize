import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import usuarios from '../views/usuarios.vue'
import posts from '../views/posts.vue'
import pu1 from '../views/pu1.vue'
import pu2 from '../views/pu2.vue'
import pu3 from '../views/pu3.vue'
import pu4 from '../views/pu4.vue'
import pu5 from '../views/pu5.vue'
import pu6 from '../views/pu6.vue'
import pu7 from '../views/pu7.vue'
import pu8 from '../views/pu8.vue'
import pu9 from '../views/pu9.vue'
import pu10 from '../views/pu10.vue'
import infoPrueba from '../views/infoPrueba.vue'
import comentarios from '../views/comentarios.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: usuarios
  },
  {
    path: '/posts',
    name: 'posts',
    component: posts
  },
  {
    path: '/pu1',
    name: 'pu1',
    component: pu1
  },
  {
    path: '/pu2',
    name: 'pu2',
    component: pu2
  },
  {
    path: '/pu3',
    name: 'pu3',
    component: pu3
  },
  {
    path: '/pu4',
    name: 'pu4',
    component: pu4
  },
  {
    path: '/pu5',
    name: 'pu5',
    component: pu5
  },
  {
    path: '/pu6',
    name: 'pu6',
    component: pu6
  },
  {
    path: '/pu7',
    name: 'pu7',
    component: pu7
  },
  {
    path: '/pu8',
    name: 'pu8',
    component: pu8
  },
  {
    path: '/pu9',
    name: 'pu9',
    component: pu9
  },
  {
    path: '/pu10',
    name: 'pu10',
    component: pu10
  },
  {
    path: '/infoPrueba',
    name: 'infoPrueba',
    component: infoPrueba
  },
  {
    path: '/comentarios',
    name: 'comentarios',
    component: comentarios
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
