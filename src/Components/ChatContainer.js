import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { AddChatItem } from '../utils/chatSlice';
import { generateRandomName, getRandomText } from '../utils/constants';

// Live Chat
const ChatContainer = () => {
    const dispatch=useDispatch();
    const [liveText,setLiveText]=useState("");
    const chatItems=useSelector((store)=> store.chat.chatList);
    console.log(chatItems)
    useEffect(()=>{
        const timer=setInterval(()=>{
            dispatch(AddChatItem({name:generateRandomName() ,text:getRandomText(10)}))
        },2000);
        
        return ()=>{
            clearInterval(timer);
        }
    },[])

  return (
    <div className='border border-black w-full  p-2 mb-1 rounded-lg shadow-lg dark:border-white'>
    <div className='flex flex-col-reverse overflow-y-scroll h-[380px]'>
        {/* Random Chats Poping Up */}
        {chatItems.map((chat,index)=> <ChatItem key={chat.name+index} name={chat.name} text={chat.text}/>)}
    </div>
    <form className='items-center my-2' onSubmit={(e)=>{
        e.preventDefault();}}>
            {/* Text from User that add to Live chat */}
            <input className="border border-black rounded-sm shadow-lg ml-4 px-2 dark:border-white dark:bg-slate-700" value={liveText} type="text" 
            onChange={(e)=>{
                setLiveText(e.target.value)
            }}/>
            <button className='font-bold px-2 py-1 mx-2 bg-green-100 dark:bg-slate-500'
             onClick={()=>{
                dispatch(AddChatItem({name:"BabuRao" ,text:liveText}))
                setLiveText("")
             }}
            >Submit</button>
        </form>
    </div>
  )
}

export default ChatContainer