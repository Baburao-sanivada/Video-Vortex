import React, { useEffect, useState } from 'react'
import { channelImage_api } from '../utils/constants';
import { abbreviateNumber } from 'js-abbreviation-number';

// Channel Details of the Main Video in the Watch Page 
const ChannelDetails = ({channelId,channelTitle}) => {
    const [details,setDetails]=useState(null);
    
        
    useEffect(()=>{
        getChannelImage();
    },[])

    const getChannelImage=async ()=>{
        const data=await fetch(channelImage_api+"&id="+channelId);
        const json=await data.json();
        setDetails(json);
        // console.log(json);
      }
    if(details==null) return <></>
    const imgUrl=details?.items[0].snippet?.thumbnails?.high?.url || {};
    const subscriberCount=details?.items[0]?.statistics?.subscriberCount


    return (<div className='flex items-center'>
        <img className="w-14 h-14 mr-1 rounded-full" alt="channelImage" src={imgUrl}/>
        <div>
            <p className='font-semibold text-lg'>{channelTitle}</p>
            <p className='text-xs'>{abbreviateNumber(subscriberCount)} subscribers</p>
        </div>
        </div>)
}

export default ChannelDetails
