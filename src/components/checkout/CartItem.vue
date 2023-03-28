<template lang="">
    <div>
        <div class="cart-item">
        <img class="cart-item__image" :src="'images/'+item.image" />
        <div class="cart-item__details">
            <h4 class="cart-item__details-name">{{ item.name }}</h4>
            <div class="cart-item__details-qty">
              <p>{{ item.quantity }}</p>
            </div>
            <p class="cart-item__details-price">{{ item.price }}</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'CartItem',
    props: ['item'],
}
</script>
<style lang="">
    
</style>