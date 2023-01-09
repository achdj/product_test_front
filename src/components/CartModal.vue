<template>
  <div class="cart-modal" v-if="cart.length > 0">
    <h3>Your cart</h3>
    <ul>
      <li v-for="product in cart" v-bind:key="product.id">
        {{ product.name }}
        <button v-on:click="removeFromCart(product.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CartModal',
  computed: {
    cart() {
      return this.$store.state.products.filter(product => product.inCart)
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId)
    },
  },
}
</script>


<style>

.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
}

.cart-modal ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-modal li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-modal li button {
  margin-left: 10px;
  background-color: black;
  color: white;
}
</style>