<template>
  <nav v-if="this.store.isAuthenticated" class="navbar  navbar-expand-md navbar-light bg-light mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <!-- Add a router link to the homepage (don't use the a tag!) -->
          <router-link to="/movies" class="nav-link"
            active-class="active">Home</router-link>
        </li>
        <li class="nav-item"><router-link to="/movies" class="nav-link" active-class="active">Movies</router-link></li>
        <li class="nav-item"><router-link to="/genre/comedy" class="nav-link" active-class="active">Comedy</router-link></li>
        <li class="nav-item"><router-link to="/genre/action" class="nav-link" active-class="active">Action</router-link></li>
        <li class="nav-item"><router-link to="/genre/drama" class="nav-link" active-class="active">Drama</router-link></li>
        <li class="nav-item"><router-link to="/genre/thriller" class="nav-link" active-class="active">Thriller</router-link></li>
</ul>
      <div class="nav-item dropdown">
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="dropdown-item"> hidden</li>
          <li class="dropdown-item" name="admin" href="/admin/index">
          <router-link to="/admin/index" v-if="isAdminComputed">Admin settings</router-link>  
            Admin settings
          </li>
          <li class="dropdown-item" style="background:#F08181;" @click="logout">Log out</li>
        </ul>
      </div>
    </div>
    <router-link to="/admin/index"  v-if="this.store.isUserAdmin.isAdmin" class="btn btn-warning m-3" active-class="active">Admin </router-link>
    <button @click="logout()" class="btn btn-danger">LogOut</button>

  </nav>
</template>

<script>
import { useUserSessionStore } from '../stores/usersession';

export default {
  name: "Navigation",
  setup() {
    const store = useUserSessionStore();
    return {
      store,
    };
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push("/");
    },
  },
};
</script>