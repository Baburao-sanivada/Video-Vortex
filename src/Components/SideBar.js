import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen);
  return !isMenuOpen?<></>:(
    <div className='shadow-lg p-5 pt-2 w-48 border border-black'>
      <div className='my-5'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default SideBar