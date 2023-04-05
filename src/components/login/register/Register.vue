<template lang="">
    <form ref="form">
  <section class="h-100 bg-dark">s
      <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                  <div class="card card-registration my-4">
                      <div class="row g-0">
                          <div class="col-xl-6 d-none d-xl-block">
                              <img src="/images/wmovies.png" alt="Sample photo" class="img-fluid"
                                  style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                          </div>
                          <div class="col-xl-6">
                              <div class="card-body p-md-5 text-black">
                                  <h3 class="mb-5 text-uppercase">Register!</h3>

                                 <div class="alert alert-danger" id="error-message">{{ errorMessage }}</div>

                                  <div class="row">
                                      <div class="form-outline mb-4">
                                          <div class="form-outline">

                                 <input type="text" id="firstnameInput" v-model="this.firstname"
                                                      class="form-control form-control-lg" name="lastnameRegister"
                                                      required placeholder="Enter your first name" />
                                                  <label class="form-label"  for="firstnameInput">First Name</label>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="form-outline mb-4">
                                              <div class="form-outline">
                                                  <input type="text" id="lastNameRegister" v-model="this.lastname"
                                                      class="form-control form-control-lg" name="lastnameRegister"
                                                      required placeholder="Enter your last name" />
                                                  <label class="form-label"  for="lastNameInput">Last name</label>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="form-outline mb-4">
                                          <input type="text" id="postcodeRegister"
                                          v-model="this.postcode" class="form-control form-control-lg"  name="postcodeRegister"
                                              required placeholder="Enter your post code" />
                                          <label class="form-label"  for="postcodeInput">Post Code</label>
                                      </div>
                                      <div class="form-outline mb-4">
                                          <input type="text" id="addressInput" v-model="this.address"
                                              class="form-control form-control-lg" name="addressRegister" required
                                              placeholder="Enter your address" />
                                          <label class="form-label" for="addressInput">Address</label>
                                      </div>
                                      <div class="form-outline mb-4">
                                          <input type="text" id="emailRegister" v-model="this.email"
                                              class="form-control form-control-lg" name="emailRegister" required
                                              placeholder="Enter your email" />
                                          <label class="form-label" for="emailInput">Email</label>
                                      </div>
                                      <div class="form-group">
                                          <div class="input-group">
                                              <input type="password" class="form-control form-control-lg" v-model="this.password"
                                                  id="passwordInput" name="passwordRegister" required
                                                  placeholder="Enter your password">
                                              <div class="input-group-append">
                                                  <button type="button" class="btn btn-secondary ml-2"
                                                      id="passwordToggleButton" @click="togglePassword()">
                                                      Show password
                                                  </button>
                                              </div>
                                          </div>
                                          <label class="form-label" for="passwordInput">Password</label>
                                      </div>
                                      <div class="form-outline mb-4">
                                          <input type="date" id="birthdateInput" v-model="this.birthdate"
                                              class="form-control form-control-lg" name="birthdateRegister"
                                              required placeholder="Enter your birthdate" />
                                          <label class="form-label" for="birthdateInput">BirthDate</label>
                                      </div>

                                  </div>

                                  <div class="d-flex justify-content-end pt-3">
                                      <a type="button" class="btn btn-light btn-lg" @click="goBack()">Cancel</a>
                                      <a name="registerBtn" type="submit"
                                          class="btn btn-warning btn-lg ms-2" @click="register()">Register</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</form>
</template>
<script>
import axios from '../../../axios-auth.js';
export default {
    name: "Register",
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
        register() {
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
                    alert("You have successfully registered!")
                    console.log(response)
                    this.$router.push('/login')
                })
                .catch(error => {
                    if (error) {
                        this.errorMessage = error.response.data.message;
                    }

                    console.log(error);
                });
        }
    },
    togglePassword() {
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
}

</script>
<style lang="">

</style>