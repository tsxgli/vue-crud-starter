<template>
  <nav class="navbar  navbar-expand-md navbar-light bg-light mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <!-- Add a router link to the homepage (don't use the a tag!) -->
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item"><router-link to="/movies" class="nav-link" active-class="active">Movies</router-link></li>
        <li class="nav-item">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/products" class="nav-link" active-class="active">Products</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Genre
          </router-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/genre/action">Action</router-link>
            <router-link class="dropdown-item" to="/genre/comedy">Comedy</router-link>
            <router-link class="dropdown-item" to="/genre/drama">Drama</router-link>
            <router-link class="dropdown-item" to="/genre/thriller">Thriller</router-link>
          </div>
        </li>
      </ul>
      <div class="nav-item dropdown">
        <router-link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" alt="Login icon" width="30">
        </router-link>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" name="admin" to="/admin/index">Admin settings</router-link>
          <router-link class="dropdown-item" style="background:#F08181;" to="/logout">Log out</router-link>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style></style>