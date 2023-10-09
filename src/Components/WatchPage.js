import React, { useEffect } from 'react'
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
    const [URLSearchParams]=useSearchParams();
    const VideoId=URLSearchParams.get("v");
    useEffect(()=>{
      dispatch(closeMenu());
    },[])
  return (
    <div className='p-2 w-full ml-10 grid grid-cols-12'>
      <div className='flex flex-col col-span-8'>
        <div>
          <ReactPlayer
              url={`https://www.youtube.com/watch?v=${VideoId}`}
              controls
              width="800px"
              height="505px"
      
              playing={true}
            />
        </div>
        <WpageVideDetails videoId={VideoId}/>
      </div>
      <div className='col-span-4 p-1'>
          <Recommendations/>
      </div>
    </div>
  )
}

export default WatchPage