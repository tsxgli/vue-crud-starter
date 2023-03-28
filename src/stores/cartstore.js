import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    cart: [],
    cartTotal: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    addRemoveCart(state, payload) {
      if (payload.add) {
        state.cart.push(payload.item);
      } else {
        state.cart = state.cart.filter((item) => item.id !== payload.item.id);
      }
        state.cartTotal = state.cart.reduce((acc, item) => acc + item.price, 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
      console.log(state.cartTotal);
      console.log(state.cart);
    },
   updateCart(state, payload) {
        state.cart = payload.cart;
        state.cartTotal = payload.cartTotal;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
        console.log(state.cartTotal);
        console.log(state.cart);
        },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  modules: {},
});
