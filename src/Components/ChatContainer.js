import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { AddChatItem } from '../utils/chatSlice';
import { generateRandomName, getRandomText } from '../utils/paths';

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
    <div className='border border-black w-full  p-2 mx-10 rounded-lg shadow-lg'>
    <div className='flex flex-col-reverse overflow-y-scroll h-[380px]'>
        {chatItems.map((chat,index)=> <ChatItem key={chat.name+index} name={chat.name} text={chat.text}/>)}
    </div>
    <form className='items-center my-2' onSubmit={(e)=>{
        e.preventDefault();
        // dispatch(AddChatItem({name:"BabuRao" ,text:liveText}))
    }}>
            <input className="border border-black rounded-sm shadow-lg ml-4 px-2" value={liveText} type="text" 
            onChange={(e)=>{
                setLiveText(e.target.value)
            }}/>
            <button className='font-bold px-2 py-1 mx-2 bg-green-100'
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