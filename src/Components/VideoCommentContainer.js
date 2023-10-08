import React, { useEffect,useState } from 'react'
import { video_comments_details_api } from '../utils/paths';
import VideoComment from './VideoComment';

const VideoCommentContainer = ({videoId,commentCount}) => {
    const [commentslist,setCommentslist]=useState({});

    useEffect(()=>{
        fetchComments();
    },[])

    const fetchComments=async ()=>{
        const data=await fetch(video_comments_details_api+videoId);
        const jsonData=await data.json();
        console.log(jsonData);
    }

  return (
    <div>
        <p>{commentCount}</p>
        <VideoComment/>
    </div>
  )
}

export default VideoCommentContainer