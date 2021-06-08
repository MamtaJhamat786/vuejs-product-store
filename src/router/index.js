import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateProduct from '../views/CreateProduct.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all-products',
    name: 'Products',
    component: Products
  },
  {
    path: '/create-product',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
})



export default router
