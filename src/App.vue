<template>
  <div class="app">
    <img alt="App img" class="img" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/files/Image.jpg?v=1660836772&width=750)">
    <HelloWorld msg="Welcome to Product test App by Achille DJ"/>
    <ProductItem v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
    <button v-on:click="toggleCartModal" class="btn">View cart</button>
    <CartModal v-show="showCartModal" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductItem from './components/ProductItem.vue'
import CartModal from './components/CartModal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductItem,
    CartModal,
  },
  data() {
    return {
      showCartModal: false,
    }
  },
  computed: {
    products() {
      // Get the list of products from the store
      return this.$store.state.products
    },
  },
  methods: {
    toggleCartModal() {
      this.showCartModal = !this.showCartModal
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
.btn {
  padding: 10px;
  background-color: rgb(224, 183, 48);
  color: white;
}
.img {
  width: 150px;
  height: 400px;
  object-fit: cover;
}
</style>