import { createSlice } from "@reduxjs/toolkit";


const chatSlice=createSlice({
    name:"chat",
    initialState:{
        chatList:[]
    },
    reducers:{
        AddChatItem:(state,action)=>{
            state.chatList.splice(10,1);
            state.chatList.unshift(action.payload);
        }
    }
})
export const {AddChatItem}=chatSlice.actions;
export default chatSlice.reducer;