import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import chatSlice from "./chatSlice";
import channelIdSlice from "./channelIdSlice";


export const AppStore=configureStore({
    reducer:{
        appSlice:appSlice,
        search:searchCacheSlice,
        chat:chatSlice,
        channelId:channelIdSlice
    }
})