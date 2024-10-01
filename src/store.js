import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./feature/listings/listingsSlice";

// import cartReducer from "./feature/cart/cartSlice";

export const store = configureStore({
    reducer: {
        listings: listingsReducer,
    },
});