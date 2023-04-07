<template lang="">
    <div class="container">
            <div class="row">
                <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card my-4">
          <div class="card-body">
                    <div class="form-group">
                        <label for="addImage">Image</label>
                        <input type="file" class="form-control-file" id="addImage" name="addImage" required>
                    </div>
                    <div class="form-group">
                        <label for="addTitle">Title</label>
                        <input type="text" class="form-control" id="addTitle" name="addTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="addDescription">Description</label>
                        <input type="text" class="form-control" id="addDescription" name="addDescription" required>
                    </div>
                    <div class="form-group">
                        <label for="addDirector">Director</label>
                        <input type="text" class="form-control" id="addDirector" name="addDirector" required>
                    </div>
                    <div class="form-group">
                        <label for="addDateProduced">Date Produced</label>
                        <input type="date" class="form-control" id="addDateProduced" name="addDateProduced" required>
                    </div>
                    <div class="form-group">
                        <label for="addGenre">Genre</label>
                        <input type="text" class="form-control" id="addGenre" name="addGenre" required>
                    </div>
                    <div class="form-group">
                        <label for="addRating">Rating</label>
                        <input type="text" class="form-control" id="addRating" name="addRating" required>
                    </div>
                    <div class="form-group">
                        <label for="addPrice">Price</label>
                        <input type="text" class="form-control" id="addPrice" name="addPrice" required>
                    </div>
                    <div class="form-group">
                        <br><button type="submit" class="btn btn-warning" id="addMovieBtn" name="addMovieBtn">Add movie</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
            </div>
        </div>
</template>
<script>
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
        addMovie() {
            axios.post('/movies', this.movie)
                .then(response => {
                    console.log(response);
                    this.$router.push('/admin');
                })
                .catch(error => {
                    console.log(error);
                });
        },
        imageUpload(){
            const formData = new FormData();
            formData.append('image', this.movie.image);
            axios.post('/movies/' + this.$route.params.id + '/image', formData)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

}
</script>
<style lang="">
    
</style>