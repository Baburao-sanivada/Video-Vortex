import React, { useEffect, useState } from 'react'
import { videoDetailsApi } from '../utils/paths';

import ChannelDetails from './ChannelDetails';
import { abbreviateNumber } from 'js-abbreviation-number';
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"
import {PiShareFatThin} from "react-icons/pi"
import {FiMoreHorizontal} from "react-icons/fi"
import VideoCommentContainer from './VideoCommentContainer';
import { PublishedTimeOfVideo } from '../utils/PublishedData';


const WpageVideDetails = ({videoId}) => {

    const [videoDetails,setvideoDetails]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const {channelId,channelTitle,description,tags,title,publishedAt}=videoDetails?.snippet || {};
    const {commentCount,likeCount,viewCount}=videoDetails?.statistics || {};

    const fetchData=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+videoId);
        const json=await data.json();
        // console.log(json.items[0])
        setvideoDetails(json?.items[0]);
    }
    if(tags!=null){
        var tags_arr=tags.slice(0,5);
    } 
    // const tags_arr=tags.slice(0,4);
  return videoDetails==null?<div></div>:(
        <div className='flex flex-col w-full'>
            {/* Video Title */}
            <div className='my-2 font-semibold text-lg'>{title}</div>

            {/* Channel Details And lIkes */}
            <div className='flex items-center my-2 justify-between'>
                <div className='flex items-center'>
                    <ChannelDetails channelId={channelId} channelTitle={channelTitle}/>
                    <div><button className='mx-4 p-2 px-4 bg-black text-white rounded-full'>Subscribe</button></div>
                </div>
                <div className='flex items-center'>
                    <div className='m-2  flex items-center bg-gray-100 p-2 px-6 rounded-full'>
                        <BiLike className='text-xl mr-1'/>
                        <p className='mx-1 text-sm'>{abbreviateNumber(likeCount)}</p>
                        <p className='mx-1 '>|</p>
                        <BiDislike className='text-xl ml-1'/>
                    </div>
                    <div className='m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between'>
                        <PiShareFatThin className='text-xl mr-1'/>
                        <p className='font-medium ml-1'>Share</p>
                    </div>
                    <div className='bg-gray-100 p-2 rounded-full ml-2'>
                        <FiMoreHorizontal/>
                </div>
                </div>
            </div>

            {/* View count,Date,Tags and Description */}
            <div className='bg-gray-100 p-2 rounded-xl px-4'>
                {/* viewCount and Date */}
                <div className='lg:flex'>
                    <p className='flex'><span className='font-semibold mr-2'>{abbreviateNumber(viewCount)}</span> views</p>
                    <p className='ml-2 font-medium'>{PublishedTimeOfVideo(publishedAt)}</p>
                    <p className='text-blue-800'>#{tags[0]}</p>
                    <p className='text-blue-800'>#{tags[1]}</p>
                    <p className='text-blue-800'>#{tags[2]}</p>
                </div>

                {/* Description */}
                <p className='text-clip'>{description.split('\n')[0]}</p>
                {/* Tags */}
                <div className='lg:flex'>
                    {
                        tags_arr.map((tag,index) => <p key={index}>#{tag}</p>)
                    }
                </div>
            </div>
            
            {/* comment Section */}
            <div className='p-2'>
                <VideoCommentContainer videoId={videoId} commentCount={commentCount}/>
            </div>
        </div>

  )
}

export default WpageVideDetails