import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,event)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state,event)=>{
            state.isMenuOpen=false;
        }
    }
})
export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;