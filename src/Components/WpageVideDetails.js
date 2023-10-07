import React, { useEffect, useState } from 'react'
import { videoDetailsApi } from '../utils/paths';

import ChannelDetails from './ChannelDetails';
import { abbreviateNumber } from 'js-abbreviation-number';
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"


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
        console.log(json.items[0])
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
            <div className='m-2 flex items-center bg-gray-100 p-2 px-6 rounded-full justify-between'>
                <BiLike className='text-xl mr-1'/>
                <p className='mx-1 text-sm'>{abbreviateNumber(likeCount)}</p>
                <p className='mx-1 '>|</p>
                <BiDislike className='text-xl ml-1'/>
            </div>
            <p>Share</p>
            <p>More</p>
        </div>

        {/* Video count,Date,Tags and Description */}
        <div>

        </div>
    </div>
  )
}

export default WpageVideDetails