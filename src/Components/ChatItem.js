import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

// Representation of Each Chat Item
const ChatItem = ({name,text}) => {
  return (
    <div className='p-2 flex items-center bg-gray-50 mb-2 dark:bg-slate-800 dark:text-white'>
        <BiUserCircle className=" dark:bg-slate-800 text-2xl" alt="user-Icon" />
        <p className='font-bold px-2'>{name}</p>
        <p>{text}</p>
    </div>
  )
}

export default ChatItem