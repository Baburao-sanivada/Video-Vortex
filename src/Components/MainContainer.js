import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { setMenu } from '../utils/appSlice'

const MainContainer = () => {
  const dispather=useDispatch();
  dispather(setMenu())
  return (
    <div className='flex flex-col overflow-hidden'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer