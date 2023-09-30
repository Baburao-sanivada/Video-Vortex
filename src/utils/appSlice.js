import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,event)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})
export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;