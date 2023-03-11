<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Products</h2>
      <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createproduct');">
        Add product
      </button>
      <div class="row mt-3">
        <product-list-item v-for="product in products" :key="product.id" :product="product" @productDeleted="reloadProducts" />
      </div>
    </div>
  </section>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import axios from "axios";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts(); 
},methods:{
  fetchProducts() {
      axios.get('http://localhost/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    reloadProducts() {
      this.fetchProducts();
    },
}

};
</script>

<style></style>