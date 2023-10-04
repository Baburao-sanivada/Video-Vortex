import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { CommentsContainer } from './CommentsContainer';
import ChatContainer from './ChatContainer';

const WatchPage = () => {
    const dispatch=useDispatch();
    const [URLSearchParams]=useSearchParams();
    const VideoId=URLSearchParams.get("v");
    useEffect(()=>{
      dispatch(closeMenu());
    },[])
  return (
    <div className='p-2 w-full'>
      <div className='flex'>
        <div>
        <iframe 
      width="800" height="400" 
      src={"https://www.youtube.com/embed/"+VideoId} 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
        </div>
      <ChatContainer/>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage