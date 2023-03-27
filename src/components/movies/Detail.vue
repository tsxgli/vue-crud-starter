<template>
    <div class="container">
      <div class="row">
        <h1 class="text-center">{{ movie[0].title }}</h1>
        <div class="col">
          <img :src="'/images/' + movie[0].image" :alt="movie[0].title" class="img-fluid" style="min-height: 10vh;">
        </div>
        <div class="col">
          <h3 class="pr-1">Description</h3>
          <p class="text-left ml-20">{{ movie[0].description }}</p>
          <div class="row">
            <h3>Director</h3>
            <p>{{ movie[0].director }}</p>
          </div>
          <div class="row">
            <h3>Date Produced</h3>
            <p>{{ movie[0].dateProduced }}</p>
          </div>
          <div class="row">
            <h3>Genre</h3>
            <p>{{ movie[0].genre }}</p>
          </div>
          <div class="row">
            <h3>Rating</h3>
            <p>{{ movie[0].rating }}</p>
          </div>
          <div class="row">
            <h3>Price</h3>
          </div>
          <div class="row">
            <button type="submit" class="btn btn-warning" name="buyMovieBtn">{{ movie[0].price }}</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      id: Number,
    },
    data() {
      return {
        movie: {},
      };
    },
    methods: {
      getMovie() {
        const id = this.$route.params.id;
        axios
          .get('http://localhost/movies/'+id)
          .then((response) => {
            this.movie = response.data;
            console.log(response.data);
            console.log(this.movie);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getMovie();
    },
  };
  </script>
  
  <style lang=""></style>