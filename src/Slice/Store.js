import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import ShowPopup from "./ShowPopup";
export const store =configureStore({
    reducer:{
        Product : ProductSlice , 
        Show : ShowPopup
    }
});