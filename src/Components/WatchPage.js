import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { CommentsContainer } from './CommentsContainer';
import ChatContainer from './ChatContainer';
import WpageVideDetails from './WpageVideDetails';
import ReactPlayer from 'react-player';
import Recommendations from './Recommendations';

const WatchPage = () => {
    const dispatch=useDispatch();
    const [showChat,setShowLiveChat]=useState(false);
    const [URLSearchParams]=useSearchParams();
    const VideoId=URLSearchParams.get("v");
    useEffect(()=>{
      dispatch(closeMenu());
    },[])
  return (
    <div className='p-2 w-full pl-10 grid grid-cols-12  dark:bg-slate-800 dark:text-white'>
      <div className='flex flex-col col-span-8 overflow-x-hidden mr-2'>
        <div className=''>
        <iframe
                data-testid="iframe"
                    width="100%"
                    height="450"
                    src={"https://www.youtube.com/embed/" +VideoId+ "?autoplay=1&mute=0"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='rounded-xl dark:bg-white'
                >
                </iframe>
        </div>
        <WpageVideDetails videoId={VideoId}/>
      </div>
      <div className='col-span-4 p-1 hidden md:block'>
          <div className='w-full'>
              {showChat && <ChatContainer />}
              <div className='w-full flex justify-center rounded-3xl '>
                  <button data-testid="show-chat" onClick={()=>setShowLiveChat(!showChat)} className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 dark:hover:bg-slate-600'>{showChat ? "Hide chat" : "Show chat"}</button>
              </div>
          </div>
          <Recommendations/>
      </div>
    </div>
  )
}

export default WatchPage