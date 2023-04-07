<template lang="">
  <div class="container">
            <div class="row">
                <div class="row justify-content-center">
                   
      <div class="col-md-8 col-lg-6">
        <div class="card my-4">
          <div class="card-body">
            <h2>Edit movie</h2>
                    <div class="form-group">
                        <label for="editTitle">Title</label>
                        <input type="text" class="form-control" v-model="movie.title" id="editTitle" name="editTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="editDescription">Description</label>
                        <input type="text" class="form-control" id="editDescription" v-model="movie.description" name="editDescription" required>
                    </div>
                    <div class="form-group">
                        <label for="editDirector">Director</label>
                        <input type="text" class="form-control" id="editDirector" v-model="movie.director" name="editDirector" required>
                    </div>
                    <div class="form-group">
                        <label for="editDateProduced">Date Produced</label>
                        <input type="date" class="form-control" id="editDateProduced" v-model="movie.dateProduced" name="editDateProduced" required>
                    </div>
                    <div class="form-group">
                        <label for="editGenre">Genre</label>
                        <input type="text" class="form-control" id="editGenre" v-model="movie.genre" name="editGenre" required>
                    </div>
                    <div class="form-group">
                        <label for="editRating">Rating</label>
                        <input type="text" class="form-control" id="editRating" v-model="movie.rating" name="editRating" required>
                    </div>
                    <div class="form-group">
                        <label for="editPrice">Price</label>
                        <input type="text" class="form-control" id="editPrice" v-model="movie.price" name="editPrice" required>
                    </div>
                    <div class="form-group">
                        <br><a type="submit" class="btn btn-warning" @click="updateMovie()" name="editMovieBtn">Update</a>
                    </div>
                </div>
            </div>
      </div>
    </div>
            </div>
        </div>
</template>
<script>

import axios from '../../axios-auth.js';
export default {
    data() {
        return {
            movie: {
                image: '',
                title: '',
                description: '',
                director: '',
                dateProduced: '',
                genre: '',
                rating: '',
                price: ''
            }
        }
    },
    methods: {
        getMovie() {
            axios.get('/movies/' + this.$route.params.id)
                .then(response => {
                    this.movie = response.data[0];
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        updateMovie() {
            axios.put('/movies/' + this.$route.params.id, this.movie)
                .then(response => {
                    alert('Movie updated!');
                    this.$router.push('/admin/manageMovies');
                })
                .catch(error => {
                    console.log(error);
                });
        },
        goBack() {
            this.$router.push('/admin/manageMovies');
        },

    },
    mounted() {
        this.getMovie();
    }

}
</script>
<style lang="">
    
</style>