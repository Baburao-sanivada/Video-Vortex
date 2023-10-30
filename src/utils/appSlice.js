import { createSlice } from "@reduxjs/toolkit";

// AppSlice to Toggle the Side Bar
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
        },
        setMenu:(state,event)=>{
            state.isMenuOpen=true;
        }
    }
})
export const {toggleMenu,closeMenu,setMenu}=appSlice.actions;
export default appSlice.reducer;