import React, { useEffect ,useState} from 'react'
import { youtube_video_api } from '../utils/paths';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videosList,setVideosList]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async ()=>{
    const data=await fetch(youtube_video_api);
    const json=await data.json();
    setVideosList(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {
        videosList.map((video)=> <VideoCard key={video.id} info={video}/>)
      }
    </div>
  )
}

export default VideoContainer