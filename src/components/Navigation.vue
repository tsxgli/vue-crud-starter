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
          <select name="genres" id="genreDropdown" @change="navigateToGenre">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
          </select>
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
    <div>
  
</div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    navigateToGenre() {
      let genre = document.getElementById("genreDropdown").value;
      this.$router.push("/genre/" + genre);
    },
  },
};

</script>

<style></style>