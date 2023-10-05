import React from 'react'
import { user_icon } from '../utils/paths'

const SearchVideoCard = ({data}) => {
    // console.log(data)
  return (
    <div className='flex bg-gray-50 py-2'>
        <img className="rounded-lg" src={data?.thumbnails?.medium?.url}/>
        <div className='px-2 w-full flex flex-col'>
            <span className='font-medium text-xl mb-4'>{data?.title}</span>
            <div className='flex items-center mb-2'><img className="w-8 my-2" src={user_icon}></img>
            <span className='font-semibold px-2'>{data?.channelTitle}</span></div>
            <span className='text-md'>{data?.description}</span>
        </div>
    </div>
  )
}

export default SearchVideoCard