import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import ProductList from '../components/products/ProductList.vue';
import CreateProduct from '../components/products/CreateProduct.vue';
import EditProduct from '../components/products/EditProduct.vue';
import MovieList from '../components/movies/MovieList.vue';
import Detail from '../components/movies/Detail.vue';
import Genre from '../components/movies/Genre.vue';
import Login from '../components/Login.vue';
import Register from '../components/login/register/Register.vue';
import Cart from '../components/checkout/Cart.vue';
import CreateUser from '../components/admin/CreateUser.vue'
import EditUser from '../components/admin/EditUser.vue';
import ManageUsers from '../components/admin/ManageUsers.vue';


const routes = [
  { path: '/', component: Login },
  { path: '/products', component: ProductList },
  { path: '/createproduct', component: CreateProduct },
  { path: '/editproduct/:id', component: EditProduct, props: true  },
  { path: '/movies', component: MovieList },
  { path: '/movies/:id', component: Detail, props: true  },
  { path: '/genre/:genre', component: Genre, props: true  },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/register', component: Register},
  { path: '/admin/createuser', component: CreateUser},
  { path: '/edituser/:id', component: EditUser, props: true  },
  { path: '/admin/manageusers', component: ManageUsers},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
