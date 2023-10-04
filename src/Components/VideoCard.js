import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='m-2 w-60 h-[300px] shadow-lg hover:border border-gray-200'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
        <div className='p-2'>
            <p className='font-bold'>{title}</p>
            <div>
                <h5>{channelTitle}</h5>
                <h5>{statistics.viewCount} Views</h5>
            </div>
        </div>
    </div>
  )
}

export default VideoCard