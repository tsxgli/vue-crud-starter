<template>
  <section>
    <div class="container">
      <h2 class="mt-3 text-uppercase">{{ $route.params.genre }} movies</h2>

      <div class="row">
        <div v-for="movie in movies" class="col">
          <movie-item :key="movie.id" :movie="movie" />
        </div>
      </div>
    </div>
  </section>
</template>
   
<script>
import MovieItem from "./MovieItem.vue";
import axios from '../../axios-auth.js';

export default {
  name: "Genres",
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchGenreMovies();
  },
  methods: {
    fetchGenreMovies() {
      const genre = this.$route.params.genre;
      const timestamp = new Date().getTime(); // generate a timestamp to use as the cache-busting parameter
      axios
        .get('http://localhost/genres/' + genre + '?timestamp =' + timestamp) // append the timestamp to the URL
        .then((response) => {
          this.movies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reloadMovies() {
      this.fetchGenreMovies();

    },
  },
};
</script>
  
<style></style>