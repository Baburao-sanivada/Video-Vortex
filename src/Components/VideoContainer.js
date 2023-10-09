import React, { useEffect ,useState} from 'react'
import { youtube_video_api } from '../utils/paths';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';
import { useDispatch } from 'react-redux';
import { setChannelId } from '../utils/channelIdSlice';

const VideoContainer = () => {
  const [videosList,setVideosList]=useState([]);
  const [scrolledDown,setScrollDown]=useState(false);
  const dispatcher=useDispatch();

  // Called after Initial Render
  useEffect(()=>{
    getVideos();
  },[scrolledDown])

  // API Call
  const getVideos=async ()=>{
    const data=await fetch(youtube_video_api);
    const json=await data.json();
    var updatedData=videosList.concat(json.items);
    // console.log(updatedData)
    setVideosList(updatedData);
    setScrollDown(false)
  }

  // Infinite Scroll
  const handleScroll = () => {
    // console.log(window.innerHeight , document.documentElement.scrollTop, document.documentElement.offsetHeight)
    if (window.innerHeight + document.documentElement.scrollTop+1500 >= document.documentElement.offsetHeight) {
        setScrollDown(true);
    }
    return;
    
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video Container
  return (
    <div className='flex flex-wrap justify-evenly md:gap-x-2'>
      {
        videosList.length==0?<ShimmerUI/>:videosList.map((video,index)=> <Link key={video?.id+index}
         to={"/watch?v="+video?.id} 
         onClick={()=>{dispatcher(setChannelId(video?.snippet?.channelId))
        }}><VideoCard  info={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer