import { createSlice } from "@reduxjs/toolkit";

// Slice to Store the channel Id in Global State
const channelIdSlice=createSlice({
    name:"channelId",
    initialState: {channelId:null},
    reducers:{
        setChannelId:(state,action)=>{
            state.channelId=action.payload;
        }
    }
})
export const {setChannelId}=channelIdSlice.actions;
export default channelIdSlice.reducer;