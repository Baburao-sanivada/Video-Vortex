import React from 'react'
import { user_icon } from '../utils/paths'

const ChatItem = ({name,text}) => {
  return (
    <div className='p-2 flex items-center bg-gray-50 mb-2'>
        <img className="w-6" alt="user-Icon" src={user_icon}/>
        <p className='font-bold px-2'>{name}</p>
        <p>{text}</p>
    </div>
  )
}

export default ChatItem