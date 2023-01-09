
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, image: "https://cdn.shopify.com/s/files/1/0627/9164/7477/products/MilkyJelly_Carousel_1_1100x.webp?v=1651799493", name: 'Jessica', price: 1712.50 },
      { id: 2, image: "https://cdn.shopify.com/s/files/1/0627/9164/7477/products/skincare-set_1_1100x.jpg?v=1656604724", name: 'Fine Diamond Eye Ring', price: 1275.00 },
      { id: 3, image: "https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Gen-G_Boy_Brow_Duo-alt_1100x.png?v=1656604705", name: 'Diana', price: 2299.00 },
    ],
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      const product = state.products.find(product => product.id === productId)
      product.inCart = true
    },
    REMOVE_FROM_CART(state, productId) {
      const product = state.products.find(product => product.id === productId)
      product.inCart = false
    },
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('ADD_TO_CART', productId)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
  },
})
