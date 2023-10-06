import React, { useEffect,useState } from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import { channelImage_api } from '../utils/paths';
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    const [channelImage,setChannelImage]=useState("");
    const {snippet,statistics}=info;
    const {channelTitle,channelId,title,thumbnails}=snippet;

    const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen)

  useEffect(()=>{
    getChannelImage();
  },[])

  const getChannelImage=async ()=>{
    const data=await fetch(channelImage_api+"&id="+channelId);
    const json=await data.json();
    const url=json?.items[0]?.snippet?.thumbnails?.high?.url;
    console.log(url);
    setChannelImage(url)
  }

  return (
    <div className='flex flex-col m-2 w-[312px] h-[300px] hover:bg-gray-50 rounded-lg'>
        <img className="rounded-lg mb-2" alt="thumbnail" src={thumbnails?.medium?.url}/>
        <div>
            {/* Image and Title Div */}
            <div className='flex flex-row items-center'>
              <img className='w-8 h-8 mr-1 rounded-full' src={channelImage}/>
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