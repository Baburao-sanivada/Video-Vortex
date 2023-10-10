import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { setMenu } from '../utils/appSlice'

const MainContainer = () => {
  const dispather=useDispatch();
  dispather(setMenu())
  return (
    <div className='flex flex-col overflow-hidden dark:bg-slate-800 dark:text-slate-300'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer