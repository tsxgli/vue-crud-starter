import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import ProductList from '../components/products/ProductList.vue';
import CreateProduct from '../components/products/CreateProduct.vue';
import EditProduct from '../components/products/EditProduct.vue';
import MovieList from '../components/movies/MovieList.vue';
import Detail from '../components/movies/Detail.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/createproduct', component: CreateProduct },
  { path: '/editproduct/:id', component: EditProduct, props: true  },
  { path: '/movies', component: MovieList },
  { path: '/movies/:id', component: Detail, props: true  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
