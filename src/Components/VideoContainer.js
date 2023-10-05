import React, { useEffect ,useState} from 'react'
import { youtube_video_api } from '../utils/paths';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';

const VideoContainer = () => {
  const [videosList,setVideosList]=useState([]);
  const [scrolledDown,setScrollDown]=useState(false);
  useEffect(()=>{
    getVideos();
  },[scrolledDown])
  const getVideos=async ()=>{
    const data=await fetch(youtube_video_api);
    const json=await data.json();
    var updatedData=videosList.concat(json.items);
    console.log("hookData:",videosList);
    console.log("API Data",json.items);
    console.log(updatedData);
    setVideosList(updatedData);
    setScrollDown(false)
  }
  const handleScroll = () => {
    console.log(window.innerHeight , document.documentElement.scrollTop, document.documentElement.offsetHeight)
    if (window.innerHeight + document.documentElement.scrollTop+1500 >= document.documentElement.offsetHeight) {
        setScrollDown(true);
    }
    return;
    
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-wrap'>
      {
        videosList.length==0?<ShimmerUI/>:videosList.map((video,index)=> <Link key={video?.id+index} to={"/watch?v="+video?.id}><VideoCard  info={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer