import React from 'react'
import { useState,useEffect } from 'react';
import { channelImage_api } from '../utils/constants';
import { PublishedTimeOfVideo } from '../utils/PublishedData';

// Each Video Card in Search Results Page
const SearchVideoCard = ({data}) => {
  const [details,setDetails]=useState(null);
    
  useEffect(()=>{
      getChannelImage();
  },[])

  // Getting Channel Data with Channel Id
  const getChannelImage=async ()=>{
      const api_data=await fetch(channelImage_api+"&id="+data?.channelId);
      const json=await api_data.json();
      setDetails(json);
      // console.log(json);
  }

  // Loading Shimmer
  if(details==null) return <div>Loading...</div>
  const imgUrl=details?.items[0].snippet?.thumbnails?.high?.url || {};


  return (
    <div className='flex bg-gray-50 py-2 dark:bg-slate-800'>
      {/* Thumbnail */}
        <img className="rounded-lg" src={data?.thumbnails?.medium?.url}/>
        {/* Video Details */}
        <div className='px-2 w-full flex flex-col'>
            <span className='font-semibold text-lg dark:text-white'>{data?.title}</span>
            <p className='text-sm text-slate-600 mb-2 dark:text-slate-300'>{PublishedTimeOfVideo(data?.publishedAt)}</p>
            <div className='flex items-center'><img className="w-8 my-2 rounded-full" src={imgUrl}></img>
            <span className='flex items-center px-2 text-slate-700 text-sm dark:text-slate-200 '>{data?.channelTitle}</span>
            </div>
            {/* Video Description */}
            <span className='text-sm text-slate-700 dark:text-slate-300'>{data?.description}</span>
        </div>
    </div>
  )
}

export default SearchVideoCard