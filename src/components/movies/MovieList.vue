<template>
    <section>
      <div class="container">
        <h2 class="mt-3 mt-lg-5">Movies</h2>

        <div class="row mt-3">
          <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" @movieDeleted="reloadMovies" />
        </div>
      </div>
    </section>
  </template>
<script>
import MovieItem from "./MovieItem.vue";
import axios from "axios";

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
    this.fetchMovies(); 
},methods:{
  fetchMovies() {
      axios.get('http://localhost/movies')
        .then(response => {
          this.movies = response.data;
          console.log(response.data);
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