<template lang="">
    <div class="h-100 h-custom" style="background-color: #00C0DB;">
      <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12">
                  <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                      <div class="card-body p-0">
                          <div class="row g-0">
                              <div class="col-lg-8">
                                  <div class="p-5">
                                      <div class="d-flex justify-content-between align-items-center mb-5">
                                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                                      </div>
                                      <hr class="my-4">                   
                                              <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                                    <img :src="'http://localhost/images/' + movie.image" :alt="movie.title" class="img-fluid"   style="height: 100%;">
                                                  </div>
                                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                                      <h6 class="text-muted">Movie</h6>
                                                      <h6 class="text-black mb-0">
                                                            {{ this.movie.title }}
                                                      </h6>
                                                  </div>
                                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                      <h6 class="text-muted">Price</h6>
                                                      <h6 class="text-black mb-0">
                                                        {{movie.price}}
                                                           </h6>
                                                  </div>
                                              </div>
                                              <hr class="my-4">
                                          <div class="pt-5">
                                              <button class="mb-0 btn btn-primary" @click="backToShop()" ><i class="fas fa-long-arrow-alt-left me-2"></i> Back to shop
                                              </button>
                                          </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 bg-grey">
                                  <div class="p-5">
                                      <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                      <hr class="my-4">

                                      <h5 class="text-uppercase mb-3">Delivery</h5>
                                      <div class="mb-5">
                                          <div class="form-outline">
                                              <input type="email" name="checkoutEmail" id="checkoutEmailInput"
                                                  class="form-control form-control-lg" required />
                                              <label class="form-label" for="checkoutEmailInput">Enter your
                                                  email</label>
                                          </div>
                                      </div>
                                      <div class="mb-4 pb-2">
                                          <label class="form-label" for="checkoutEmailInput">Choose payment
                                              method</label>
                                          <select class="select">
                                              <option value="1">Credit Card</option>
                                              <option value="2">IDEAL</option>
                                              <option value="3">Debit Card</option>
                                          </select>
                                      </div>


                                      <hr class="my-4">
                                      <div class="d-flex justify-content-between mb-5">
                                          <label class="form-label" for="">Total price
                                          </label>
                                          <h5 class="text-uppercase">
                                                {{movie.price}}     
                                          </h5>
                                          <h5></h5>
                                      </div>
                                          <button name="payBtn" @click="checkout()" class="btn btn-dark btn-block btn-lg"
                                              data-mdb-ripple-color="dark">Pay</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name: "Cart",
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
        fetchMovie() {
            const movieId = localStorage.getItem('movieId');
            axios.get("http://localhost/movies/" + movieId).then((response) => {
                this.movie = response.data[0];
                console.log(response.data);
            });
        },
        checkout() {
            axios.post("http://localhost/sendMail", this.movie).then((response) => {
                console.log(response.data);
            });
        },
        backToShop() {
            window.history.back();
        },

    },
    mounted() {
        this.fetchMovie();
    },
};
</script>
  
<style>
/* your styles */
</style>
  