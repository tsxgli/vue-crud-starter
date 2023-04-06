<template lang="">
    <div>
        <div class="m-3 col-sm-6">
            <router-link :to="/movies/ + movie._id">
                    <div class=" card" style="width:20vw; height: 100%; min-height:300px; min-width:180px; ">
                        <div class="card-body">
                            <h5 class="card-title">{{movie.title}}</h5>
                            <div class="card-body">
                                <img :src="'/images/' + movie.image" alt="{{movie.title}}"
                                    class="img-fluid " style="min-height: 10vh;">
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="float-start">
                                <button type="submit" class="btn btn-primary">{{movie.price}}</button>
                            </span>
                        </div>
                    </div>
            </router-link>
        </div>
    </div>
</template> 
<script>
import axios from '../../axios-auth.js';
export default {
    name: "MovieItem",
    props: {
        movie: Object,
    },
    methods: {
        deleteMovie(id) {
            axios.delete('/movies/' + id)
                .then(response => {
                    console.log(response);
                    this.$emit('movieDeleted');
                    this.$router.push('/movies');
                    this.$router.go;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        editMovie(id) {
            this.$router.push('/editproduct/' + id);
        },
    },
};
</script>
<style lang="">
    
</style>