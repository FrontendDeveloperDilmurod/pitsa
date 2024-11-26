import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        user:userSlice,
        cart:cartSlice
    }
})