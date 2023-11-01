import React, { useEffect, useState } from 'react'
import { videoDetailsApi } from '../utils/constants';
import ChannelDetails from './ChannelDetails';
import { abbreviateNumber } from 'js-abbreviation-number';
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"
import {PiShareFatThin} from "react-icons/pi"
import {FiMoreHorizontal} from "react-icons/fi"
import VideoCommentContainer from './VideoCommentContainer';
import { PublishedTimeOfVideo } from '../utils/PublishedData';

{/* Title,Description,Channel Details,Comments of Video  in Watch Page of Main Video*/}
const WpageVideoDetails = ({videoId}) => {
    const [videoDetails,setvideoDetails]=useState(null);

    // Called When VideoId is Changed
    useEffect(()=>{
        fetchData();
    },[videoId])

    const {channelId,channelTitle,description,tags,title,publishedAt}=videoDetails?.snippet || {};
    const {commentCount,likeCount,viewCount}=videoDetails?.statistics || {};

    // Getting Details of The Video
    const fetchData=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+videoId);
        const json=await data.json();
        setvideoDetails(json?.items[0]);
    }

    // Splicing the tags
    if(tags!=null){
        var tags_arr=tags.slice(0,5);
    } 

  return videoDetails==null?<div></div>:(
        <div className='flex flex-col w-full'>
            {/* Video Title */}
            <div className='my-2 font-semibold text-lg'>{title}</div>

            {/* Channel Details And lIkes */}
            <div className='flex items-center my-2 justify-between'>
                <div className='flex items-center '>
                    <ChannelDetails channelId={channelId} channelTitle={channelTitle}/>
                    <div><button className='mx-4 p-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded-full'>Subscribe</button></div>
                </div>
                {/* Likes and DisLikes */}
                <div className='flex items-center max-sm:hidden'>
                    <div className='m-2  flex items-center bg-gray-100 dark:bg-slate-800 p-2 px-6 rounded-full dark:border border-white'>
                        <BiLike className='text-xl mr-1'/>
                        <p className='mx-1 text-sm'>{abbreviateNumber(likeCount)}</p>
                        <p className='mx-1'>|</p>
                        <BiDislike className='text-xl ml-1'/>
                    </div>

                    {/* Share Button */}
                    <div className='m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between  dark:bg-slate-800 dark:border border-white '>
                        <PiShareFatThin className='text-xl mr-1'/>
                        <p className='font-medium ml-1'>Share</p>
                    </div>

                    {/* More */}
                    <div className='bg-gray-100 p-2 rounded-full ml-2 dark:bg-slate-800 dark:border border-white hidden md:block '>
                        <FiMoreHorizontal/>
                </div>
                </div>
            </div>

            {/* View count,Date,Tags and Description */}
            <div className='bg-gray-100 p-2 rounded-xl px-4 dark:bg-slate-600 '>
                {/* viewCount and Date */}
                <div className='lg:flex'>
                    <p className='flex'><span className='font-semibold mr-2'>{abbreviateNumber(viewCount)}</span> views</p>
                    <p className='lg:ml-2 font-medium'>{PublishedTimeOfVideo(publishedAt)}</p>
                    {tags!=null && tags.length>0} && <p className='text-blue-800 dark:text-blue-500'>#{tags[0]}</p>
                    {tags!=null && tags.length>1} && <p className='text-blue-800 dark:text-blue-500'>#{tags[1]}</p>
                    {tags!=null && tags.length>2} && <p className='text-blue-800 dark:text-blue-500'>#{tags[2]}</p>
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

export default WpageVideoDetails