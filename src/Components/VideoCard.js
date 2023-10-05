import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='flex flex-col m-2 w-[312px] h-[300px] hover:border border-gray-200'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url}/>
        <div className='p-2'>
            <p className='font-semibold line-clamp-2'>{title}</p>
            <div>
                <h5>{channelTitle}</h5>
                <h5>{abbreviateNumber(statistics?.viewCount)} Views</h5>
            </div>
        </div>
    </div>
  )
}

export default VideoCard