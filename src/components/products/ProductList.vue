<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Products</h2>
      <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createproduct');">
        Add product
      </button> 
      <div class="row mt-3">
        <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" @movieDeleted="reloadMovies" />
      </div>
    </div>
  </section>
</template>

<script>

import axios from "axios";
import MovieItem from "../movies/MovieItem.vue";

export default {
  name: "ProductList",
  components: {
    MovieItem,
},
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchProducts(); 
},methods:{
  fetchProducts() {
      axios.get('http://localhost/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    reloadMovies() {
      this.fetchMovies();
    },
}

};
</script>

<style></style>