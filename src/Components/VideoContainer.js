import React, { useEffect ,useState} from 'react'
import { youtube_video_api } from '../utils/paths';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
        videosList.map((video)=> <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer