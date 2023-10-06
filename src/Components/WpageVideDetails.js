import React, { useEffect, useState } from 'react'
import { videoDetailsApi } from '../utils/paths';

import ChannelDetails from './ChannelDetails';

const WpageVideDetails = ({videoId}) => {

    const [videoDetails,setvideoDetails]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const {channelId,channelTitle,description,tags,title}=videoDetails?.snippet || {};
    const {commentCount,likeCount,viewCount}=videoDetails?.statistics || {};

    const fetchData=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+videoId);
        const json=await data.json();
        setvideoDetails(json?.items[0]);
    }
    
  return videoDetails==null?<div></div>:(
    <div className='flex flex-col'>
        {/* Video Title */}
        <div className='my-2 font-semibold text-lg'>{title}</div>

        {/* Channel Details And lIkes */}
        <div className='flex flex-row items-center'>
            <ChannelDetails channelId={channelId} channelTitle={channelTitle}/>
            <button className='mx-4 p-2 px-4 bg-black text-white rounded-full'>Subscribe</button>
            <p>Likes</p>
            <p>More</p>
        </div>

        {/* Video count,Date,Tags and Description */}
        <div>

        </div>
    </div>
  )
}

export default WpageVideDetails