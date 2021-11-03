import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Admin.vue'
import Upload from '../views/UploadStore.vue'
import Store from '../views/StoreInfo.vue'
// import Home from '../views/StoreInfo.vue' // for test

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/admin',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/upload',
    name: 'Upload',
    component: Upload
    // add authenticaton
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
