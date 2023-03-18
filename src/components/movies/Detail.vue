<template lang="">
     <div class="container">
            <div class="row">
                <h1 class="text-center">{{movie.title}}</h1>
                <div class="col">
                    <img :src="'/images/' + movie.image" :alt=movie.title :class="img-fluid" style="min-height: 10vh;">
                </div>
                <div class="col">
                    <h3 class="pr-1">Description</h3>
                    <p class="text-left ml-20">{{movie.description}}</p>
                    <div class="row">
                        <h3>Director</h3>
                        <p>{{movie.director}}</p>
                    </div>
                    <div class="row">
                        <h3>Date Produced</h3>
                        <p>{{movie.dateProduced}}?></p>
                    </div>
                    <div class="row">
                        <h3>Genre</h3>
                        <p>{{movie.genre}}</p>
                    </div>
                    <div class="row">
                        <h3>Rating</h3>
                        <p>{{movie.rating}}</p>
                    </div>
                    <div class="row">
                        <h3>Price</h3>
                    </div>
                    <div class="row">
                    
                            <button type="submit" class="btn btn-warning" name="buyMovieBtn">
                                {{movie.price}}</button>
                    
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
        movie: Object,
    },
    methods: {
        getMovie() {
            axios.get('http://localhost/movies/' + this.id)
                .then(response => {
                    this.movie = response.data;
                    console.log(this.movie);
                })
                .catch(error => {
                    console.log(error);
                });
        }, mounted() {
            this.getMovie();
        },
    }

}
</script>
<style lang="">
    
</style>