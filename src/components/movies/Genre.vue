<template>
    <section>
      <div class="container">
        <h2 class="mt-3 text-uppercase" >{{ $route.params.genre }} movies</h2>
  
        <div class="row">
          <div v-for="movie in movies" class="col">
            <movie-item :key="movie.id" :movie="movie" @movieDeleted="reloadMovies" />
          </div>
        </div>
      </div>
    </section>
  </template>
   
  <script>
  import MovieItem from "./MovieItem.vue";
  import axios from 'axios';
  
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
        axios
          .get('http://localhost/genres/'+genre)
          .then((response) => {
            this.movies = response.data;
            console.log(response.data);
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