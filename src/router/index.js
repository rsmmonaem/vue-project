import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home.vue'
import SingleProduct from '../Components/SingleProduct.vue'
import ProductsByCat from '../Components/ProductsByCat.vue'
import NotFound from '../Components/NotFound.vue' // Import the NotFound component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/products/category/:id',
      name: 'categories',
      component: ProductsByCat
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // Wildcard route for 404 Not Found
    {
      path: '/:catchAll(.*)', // Matches any path not matched by earlier routes
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
