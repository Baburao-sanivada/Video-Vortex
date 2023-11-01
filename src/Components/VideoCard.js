import React, { useEffect,useState } from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import { channelImage_api } from '../utils/constants';
import { useSelector } from 'react-redux';

// Video Card for each video in Home Screen/Home Page
const VideoCard = ({info}) => {
    const [channelImage,setChannelImage]=useState("");
    const {snippet,statistics}=info;
    const {channelTitle,channelId,title,thumbnails}=snippet;

    // Subscribing to Store
    const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen)

  useEffect(()=>{
    getChannelImage();
  },[])

  // Getting Channel Image using ChannelId
  const getChannelImage=async ()=>{
    const data=await fetch(channelImage_api+"&id="+channelId);
    const json=await data.json();
    const url=json?.items[0]?.snippet?.thumbnails?.high?.url;
    setChannelImage(url)
  }

  return (
    <div className='flex flex-col m-2 w-[312px] h-[300px] hover:bg-slate-200 rounded-lg dark:hover:bg-slate-600'>
        {/* Main Image - Thumbnail*/}
        <img className="rounded-lg mb-2" alt="thumbnail" src={thumbnails?.medium?.url}/>

        <div>
            {/* Image and Title Div */}
            <div className='flex flex-row items-center'>
              <img className='w-10 h-10 mr-1 rounded-full' src={channelImage}/>
              <p className='font-semibold line-clamp-2 text-base font-sans'>{title}</p>
            </div>

            {/* Channel Name And Views Count */}
            <div className='pl-10 text-sm'>
              <p className='my-[0.15rem]'>{channelTitle}</p>
              <p className=''>{abbreviateNumber(statistics?.viewCount)} Views</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard