import React, { useEffect,useState } from 'react'
import { video_comments_details_api } from '../utils/constants';
import VideoComment from './VideoComment';

// Comments in the Watch Page
const VideoCommentContainer = ({videoId,commentCount}) => {
    const [commentslist,setCommentslist]=useState(null);

    // Called when Video Id is Chang(Helps while landing to Same page with Different Video Id-> Clicking on Recomendations)
    useEffect(()=>{
        fetchComments();
    },[videoId])

    // Fetching Comments
    const fetchComments=async ()=>{
        const data=await fetch(video_comments_details_api+videoId);
        const jsonData=await data.json();
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