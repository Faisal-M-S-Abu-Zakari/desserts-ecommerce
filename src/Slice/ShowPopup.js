import { createSlice } from "@reduxjs/toolkit";

const ShowPopup = createSlice({
    initialState : false , 
    name : 'ShowPopup' , 
    reducers :{
        Appear:(state , action)=>{
            return action.payload
        },
        
    }
})

export const {Appear} = ShowPopup.actions ;
export default ShowPopup.reducer