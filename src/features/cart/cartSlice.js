import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
    },
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseQuantitiy: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantitiy: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // if 0 delete element form cart
      if (item.quantity < 1) {
        cartSlice.caseReducers.deleteItem(state,action)
        // state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
      }
    },
  },
});

export const { deleteItem, addItem, clearCart, increaseQuantitiy, decreaseQuantitiy } = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalQuantitiy(state) {
  return state.cart.cart.reduce((prev, current) => (prev += current.quantity), 0);
}
export function getTotalPrice(state) {
  return state.cart.cart.reduce((prev, current) => (prev += +current.totalPrice), 0);
}

export const getCurrentItemQuantity = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId == id)?.quantity || 0;
};
