import React from 'react'

const SideBar = () => {
  return (
    <div className='shadow-lg p-5 w-48'>
      <div className='my-5'>
        <ul>
          <li>Home</li>
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