import { createSlice } from "@reduxjs/toolkit";

// Chat Slice to Add chat item to live chat
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        chatList:[]
    },
    reducers:{
        AddChatItem:(state,action)=>{
            // Max Limit =10
            state.chatList.splice(10,1);
            state.chatList.unshift(action.payload);
        }
    }
})
export const {AddChatItem}=chatSlice.actions;
export default chatSlice.reducer;