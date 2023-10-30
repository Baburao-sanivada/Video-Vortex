import React, { useEffect,useState } from 'react'
import { videoDetailsApi } from '../utils/constants';
import { PublishedTimeOfVideo } from '../utils/PublishedData';
import { abbreviateNumber } from 'js-abbreviation-number';

// Each Video data in Recomendations
const RecVideo = ({data}) => {
    const videoId=data?.contentDetails?.upload?.videoId;
    const [videoDetails,setVideoDetails]=useState(null);
    
    useEffect(()=>{
        fetchVideoDetails();
    },[])

    const fetchVideoDetails=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+videoId);
        const jsondata=await data.json();
        setVideoDetails(jsondata?.items[0]);
    }

    // Load Shimmer UI Until it Reloads
    if(videoDetails==null) return <div></div>

    // Details
    const {channelId,channelTitle,publishedAt,title}=videoDetails?.snippet;
    const {url}=videoDetails?.snippet?.thumbnails?.high;
    const {viewCount}=videoDetails?.statistics;


  return (
    <div className='grid grid-cols-12 flex mb-3 ml-1'>
        {/* Thumbnail */}
        <div className='mr-2 col-span-5'>
            <img className='h-24 w-80 rounded-lg ' alt="thumbnail" src={url}/>
        </div>
        {/* Video Details */}
        <div className='col-span-7'>
            <p className='line-clamp-2 mt-1 font-semibold text-sm'>{title}</p>
            <p className='line-clamp-1 text-sm text-gray-700 dark:text-slate-300'>{channelTitle}</p>
            <div className='flex line-clamp-1 text-sm text-gray-500 items-center'>
                <p className='mr-1 dark:text-slate-200 '>{abbreviateNumber(viewCount)} views</p>
                <span className='mx-1 dark:text-slate-200 '>.</span>
                <p className='dark:text-slate-200 '>{PublishedTimeOfVideo(publishedAt)}</p>
            </div>
        </div>
    </div>
  )
}

export default RecVideo
