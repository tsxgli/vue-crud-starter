<template>
    <section>
      <div class="container">
        <h2 class="mt-3">Movies</h2>

        <div class="row">
          <div v-for="movie in movies" class="col" >
            <movie-item  :key="movie.id" :movie="movie"/>
          </div>
        </div>
      </div>
    </section>
  </template>
<script>
import MovieItem from "./MovieItem.vue";
import axios from '../../axios-auth.js';

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
      axios.get('/movies')
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