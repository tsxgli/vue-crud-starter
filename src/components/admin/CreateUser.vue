<template lang="">
    <div>
        <form ref="form">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card my-4">
          <div class="card-body">
            <h3 class="mb-4 text-center">Create User</h3>
            <div class="alert alert-danger" v-if="errorMessage" id="error-message">{{ errorMessage }}</div>
            <div class="form-group">
              <label for="firstnameInput">First Name</label>
              <input type="text" id="firstnameInput" v-model="this.firstname" class="form-control" name="firstnameRegister" required placeholder="Enter your first name">
            </div>
            <div class="form-group">
              <label for="lastnameInput">Last Name</label>
              <input type="text" id="lastnameInput" v-model="this.lastname" class="form-control" name="lastnameRegister" required placeholder="Enter your last name">
            </div>
            <div class="form-group">
              <label for="postcodeInput">Post Code</label>
              <input type="text" id="postcodeInput" v-model="this.postcode" class="form-control" name="postcodeRegister" required placeholder="Enter your post code">
            </div>
            <div class="form-group">
              <label for="addressInput">Address</label>
              <input type="text" id="addressInput" v-model="this.address" class="form-control" name="addressRegister" required placeholder="Enter your address">
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="text" id="emailInput" v-model="this.email" class="form-control" name="emailRegister" required placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="passwordInput">Password</label>
              <div class="input-group">
                <input type="password" class="form-control" v-model="this.password" id="passwordInput" name="passwordInput" required placeholder="Enter your password">
                <button type="button" class="btn btn-secondary" id="passwordToggleButton" @click="togglePassword()">Show password</button>
              </div>
            </div>
            <div class="form-group">
              <label for="birthdateInput">BirthDate</label>
              <input type="date" id="birthdateInput" v-model="this.birthdate" class="form-control" name="birthdateRegister" required placeholder="Enter your birthdate">
            </div>
            <div class="form-group">
              <label for="isAdminInput">User Type</label>
              <br>
              <select name="isAdmin" v-model="this.isAdmin" id="isAdmin">
                <option value="0">User</option>
                <option value="1">Admin</option>
              </select>
             
            <div class="d-flex justify-content-center">
              <button name="registerBtn" type="submit" class="btn btn-warning btn-lg mt-4" @click="addUser()">Submit</button>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <a type="button" class="btn btn-light btn-lg" @click="goBack()">Cancel</a>
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
    name: "Create User",
    data() {
        return {
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
    },
    methods: {
        addUser() {
            axios.post('/users/register', {
                firstname: this.firstname,
                lastname: this.lastname,
                postcode: this.postcode,
                address: this.address,
                email: this.email,
                password: this.password,
                birthdate: this.birthdate,
                isAdmin: this.isAdmin
            })
                .then(response => {
                    alert("Added user succesfully!")
                    console.log(response)
                    this.$router.push('/login')
                })
                .catch(error => {
                    if (error) {
                        this.errorMessage = error.response.data.message;
                    }
                    console.log(error);
                });
        }, togglePassword() {
            var x = document.getElementById("passwordInput");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        },
        goBack() {
            this.$router.push('/login')
        }

    },

}

</script>
<style lang="">

</style>