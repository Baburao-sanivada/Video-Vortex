import { createSlice } from "@reduxjs/toolkit";


const searchCache=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        AddCacheItem:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})
export const {AddCacheItem}=searchCache.actions;
export default searchCache.reducer;