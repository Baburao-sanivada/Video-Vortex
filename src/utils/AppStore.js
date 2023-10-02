import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";


export const AppStore=configureStore({
    reducer:{
        appSlice:appSlice,
        search:searchCacheSlice
    }
})