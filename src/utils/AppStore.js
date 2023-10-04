import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import chatSlice from "./chatSlice";


export const AppStore=configureStore({
    reducer:{
        appSlice:appSlice,
        search:searchCacheSlice,
        chat:chatSlice
    }
})