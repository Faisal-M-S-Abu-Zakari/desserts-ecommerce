import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: [] ,
    reducers: {
        addProduct: (state, action) => {
            const findProduct = state.find(item => item.Title === action.payload.Title);
            if(findProduct){
                findProduct.quantity += 1;
            }else{
                const cloneProducts ={...action.payload , quantity :1}
                state.push(cloneProducts)
            }
        },
        removeProduct: (state, action) => {
            return state.filter((item , index) => index !== action.payload);
        },
        clear : (state , action) => {
            return []
        },
}});

export const {addProduct  , removeProduct , clear} = ProductSlice.actions;

export default ProductSlice.reducer;       
