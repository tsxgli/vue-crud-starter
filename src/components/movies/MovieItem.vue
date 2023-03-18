<template lang="">
    <div>
        <div class="col-lg-3 col-md-4 m-3 col-sm-6" style="text-decoration:none;">
                <a href="/detail?{{movie.id}}" >
                    <div class=" card" style="width: 100%; height: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{movie.title}}</h5>
                            
                            <div class="card-body">
                                <img :src="'/images/' + movie.image" alt="{{movie.title}}"
                                    class="img-fluid " style="height: 100%;">
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="float-start">
                                <button type="submit" class="btn btn-primary">{{movie.price}}</button>
                            </span>
                        </div>
                    </div>
                 </a>
        </div>
    </div>
</template> 
<script>
import axios from "axios";
export default {
    name: "MovieItem",
    props: {
        movie: Object,
    },
    methods: {
        deleteMovie(id) {
            axios.delete('http://localhost/movies/' + id)
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