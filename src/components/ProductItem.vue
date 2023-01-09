<template>
  <div class="product-item">
    <img v-bind:src="product.image" v-bind:alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button v-on:click="addToCart(product.id)">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    addToCart(productId) {
      this.$store.dispatch('addToCart', productId)
    },
  },
}
</script>


<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-item {
  display: flex;
  align-items: center;
}

.product-item img {
  width: 150px;
  height: 150px;
  padding: 20px;
}

.product-item h3 {
  margin: 0;
  padding: 12px;
}

.product-item h4 {
  margin: 0;
}

.product-item button {
  margin: 20px;
  padding: 9px;
  background-color: black;
  color: white;
}
</style>