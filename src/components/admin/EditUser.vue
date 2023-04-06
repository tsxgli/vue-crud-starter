<template lang="">
      <div>
        <form ref="form">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card my-4">
          <div class="card-body">
            <h3 class="mb-4 text-center">Edit User</h3>
            <div class="alert alert-danger" v-if="errorMessage" id="error-message">{{ errorMessage }}</div>
            <div class="form-group">
              <label for="firstnameInput">First Name</label>
              <input type="text" id="firstnameInput" v-model="user.firstname" class="form-control" name="firstnameRegister" required placeholder="Enter your first name">
            </div>
            <div class="form-group">
              <label for="lastnameInput">Last Name</label>
              <input type="text" id="lastnameInput" v-model="user.lastname" class="form-control" name="lastnameRegister" required placeholder="Enter your last name">
            </div>
            <div class="form-group">
              <label for="postcodeInput">Post Code</label>
              <input type="text" id="postcodeInput" v-model="user.postcode" class="form-control" name="postcodeRegister" required placeholder="Enter your post code">
            </div>
            <div class="form-group">
              <label for="addressInput">Address</label>
              <input type="text" id="addressInput" v-model="user.address" class="form-control" name="addressRegister" required placeholder="Enter your address">
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="text" id="emailInput" v-model="user.email" class="form-control" name="emailRegister" required placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="birthdateInput">BirthDate</label>
              <input type="date" id="birthdateInput" v-model="user.birthdate" class="form-control" name="birthdateRegister" required placeholder="Enter your birthdate">
            </div>
            <div class="form-group">
              <label for="isAdminInput">User Type</label>
              <br>
              <select name="isAdmin" v-model="user.isAdmin" id="isAdmin">
                <option value="0">User</option>
                <option value="1">Admin</option>
              </select>
             
              <div class="d-flex justify-content-end pt-3">
                                      <a type="button" class="btn btn-light btn-lg" @click="goBack()">Cancel</a>
                                      <a name="registerBtn" type="submit" class="btn btn-warning btn-lg ms-2" @click="updateUser()">Submit</a>
                                  </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</form>
    </div>
</template>
<script>
import axios from '../../axios-auth.js';
export default {
    data() {
        return {
            user: {
                firstname: '',
                lastname: '',
                postcode: '',
                address: '',
                email: '',
                password: '',
                birthdate: '',
                isAdmin: 0,
                errorMessage: "",
            }
        }
    },
    methods: {
        getUser() {
            axios.get('/users/' + this.$route.params.id)
                .then(response => {
                    this.user = response.data;
                    console.log(response.data);
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message;
                });
        },
        updateUser() {
            axios.put('/users/' + this.$route.params.id, this.user)
                .then(response => {
                    alert("User updated successfully!");
                    this.$router.push('/admin/users');
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message;
                });
        },
        goBack() {
            this.$router.push('/admin/manageUsers');
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>
<style lang="">
    
</style>