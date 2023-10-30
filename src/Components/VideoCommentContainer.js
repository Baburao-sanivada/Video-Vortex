import React, { useEffect,useState } from 'react'
import { video_comments_details_api } from '../utils/paths';
import VideoComment from './VideoComment';
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCommentContainer = ({videoId,commentCount}) => {
    const [commentslist,setCommentslist]=useState(null);

    useEffect(()=>{
        fetchComments();
    },[videoId])

    const fetchComments=async ()=>{
        const data=await fetch(video_comments_details_api+videoId);
        const jsonData=await data.json();
        // console.log(jsonData);
        setCommentslist(jsonData.items);
    }

  return commentslist==null?<div>Loading</div>:(
    <div>
        <p className='my-2'>{commentCount} Comments</p>
        {
          commentslist.map((comment,index)=> <VideoComment key={index} data={comment}/>)
        }
    </div>
  )
}

export default VideoCommentContainer