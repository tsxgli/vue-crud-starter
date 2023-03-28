<template lang="">
   <CartItem
  v-for="lineItem in cart.line_items"
  :key="lineItem.id"
  :item="lineItem"
  class="cart__inner"
/>
</template>
<script>
import CartItem from "./CartItem.vue";
import axios from "axios";
export default {

    name: "Cart",
    data() {
        return {
            cart: [],
        };
    },
    mounted() {
        this.fetchCart();
    },
    methods: {
        fetchCart() {
            // get the cart data from sessionStorage
            const cartData = sessionStorage.getItem("cart");
            if (cartData) {
                this.cart = JSON.parse(cartData);
            }
        },
        addToCart(movie) {
            // add the movie to the cart
            this.cart.push(movie);
            // save the updated cart data to sessionStorage
            sessionStorage.setItem("cart", JSON.stringify(this.cart));
        },
        clearCart() {
            // clear the cart data from sessionStorage
            sessionStorage.removeItem("cart");
            this.cart = [];
        },
    },
};
</script>

<style>
/* your styles */
</style>