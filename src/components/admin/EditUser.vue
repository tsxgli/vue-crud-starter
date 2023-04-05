<template lang="">
    <div>
        <section>
        <h1>Add Movie</h1>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="addTitle">{{user.firstname}}</label>
                        <input type="text" class="form-control" id="addTitle" name="addTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="addDescription">{{user.lastname}}</label>
                        <input type="text" class="form-control" id="addDescription" name="addDescription" required>
                    </div>
                    <div class="form-group">
                        <label for="addDirector">{{user.email}}</label>
                        <input type="text" class="form-control" id="addDirector" name="addDirector" required>
                    </div>
                    <div class="form-group">
                        <label for="addDateProduced">{{user.password}}</label>
                        <input type="date" class="form-control" id="addDateProduced" name="addDateProduced" required>
                    </div>
                    <div class="form-group">
                        <label for="addGenre">{{user.address}}</label>
                        <input type="text" class="form-control" id="addGenre" name="addGenre" required>
                    </div>
                    <div class="form-group">
                        <label for="addRating">{{user.birthdate}}</label>
                        <input type="text" class="form-control" id="addRating" name="addRating" required>
                    </div>
                    <div class="form-group">
                        <label for="addPrice">{{user.isAdmin}}</label>
                        <input type="text" class="form-control" id="addPrice" name="addPrice" required>
                    </div>
                    <div class="form-group">
                        <br><button type="submit" class="btn btn-warning" id="addMovieBtn" name="addMovieBtn">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>