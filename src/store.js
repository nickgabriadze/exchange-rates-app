import { configureStore } from "@reduxjs/toolkit";
import rateReducer from "./features/rateReducer";

export const store = configureStore({
    reducer: {
        rateReducer: rateReducer
    }
})

export default store;