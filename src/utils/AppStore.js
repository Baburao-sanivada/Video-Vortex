import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";


export const AppStore=configureStore({
    reducer:{
        appSlice:appSlice,
    }
})