<template lang="">
   <div class="container mt-3 mb-3">
            <h1>Manage Movies</h1>
            <h3>
                Add new movie
            </h3>
            <a href="/admin/createMovie" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Create new
                movie</a>

            <div class="container mt-3 mb-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr v-for="movie in this.movies">
                                    <td>
                                       {{movie._id}}
                                    </td>
                                    <td>
                                     {{movie.title}} 
                                    </td>
                                    <td>
                                        <div class="row">
                                            <div class="col">
                                                <a @click="editMovie(movie._id)"
                                                    class="btn btn-primary btn-sm"><i class="fa fa-edit"></i> Edit</a>
                                            </div>
                                            <div class="col">
                                                <a @click="deleteMovie(movie._id)"
                                                    class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                        </tbody>
                    </table>
        </div>
    </div>
</template>
<script>
import axios from '../../axios-auth.js';
export default {
    data() {
        return {
            _id: '',
            title: '',
            movies: []
        }
    }, methods: {
        fetchMovies() {
            axios.get('/movies')
                .then(response => {
                    this.movies = response.data;
                    console.log( response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        reloadMovies() {
            this.fetchMovies();
        },
        editMovie(id) {
            this.$router.push('/admin/editMovie/' + id);
        },
        deleteMovie(id) {
            axios.delete('/movies/' + id)
                .then(response => {
                    this.reloadMovies();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.fetchMovies();
    }
    
}
</script>
<style lang="">
    
</style>