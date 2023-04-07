<template>
    <div class="container">
        <div class="row">
            <h1 class="text-center">{{ movie.title }}</h1>
            <div class="col">
                <img :src="'http://localhost/images/' + movie.image" :alt="movie.title" class="img-fluid" style="min-height: 10vh;">
            </div>
            <div class="col">
                <h3 class="pr-1">Description</h3>
                <p class="text-left ml-20" v-html="movie.description"></p>
                <div class="row">
                    <h3>Director</h3>
                    <p>{{ movie.director }}</p>
                </div>
                <div class="row">
                    <h3>Date Produced</h3>
                    <p>{{ movie.dateProduced }}</p>
                </div>
                <div class="row">
                    <h3>Genre</h3>
                    <p>{{ movie.genre }}</p>
                </div>
                <div class="row">
                    <h3>Rating</h3>
                    <p>{{ movie.rating }}</p>
                </div>
                <div class="row">
                    <h3>Price</h3>
                </div>
                <div class="row">
                    <button type="submit" router class="btn btn-warning" @click="addToCart" name="buyMovieBtn">{{
                        movie.price }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Detail',

    data() {
        return {
            movie: {
                id: 0,
                title: '',
                description: '',
                director: '',
                dateProduced: '',
                genre: '',
                rating: '',
                price: 0,
                image: '',
            },
        };
    },
    methods: {
        getMovie() {
            const id = this.$route.params.id;
            axios
                .get('http://localhost/movies/' + id)
                .then((response) => {
                    this.movie = response.data[0];
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addToCart() {
            this.$router.push('/cart'); // navigate to /cart
            localStorage.removeItem('movieId');
            localStorage.setItem('movieId', this.$route.params.id);
        },
    },
    mounted() {
        this.getMovie();
    },
};
</script>
