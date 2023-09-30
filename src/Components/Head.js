import React from 'react' 
import { hamburgerPath, user_icon, youtubeLogo } from '../utils/paths'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
const Head = () => {

  const dispather=useDispatch();
  const HamburgerOnClickHandler=()=>{
    dispather(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img 
        onClick={HamburgerOnClickHandler}
        className="h-10 cursor-pointer" alt="menu" src={hamburgerPath}/>
        <img className="h-10 mx-2" alt="youtubeLogo" src={youtubeLogo}></img>
      </div>
      <div className="col-span-10 px-10 mx-10">
        <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type='text'/>
        <button className="border border-gray-400 rounded-r-full py-2 px-3 bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={user_icon}/>
      </div>
    </div>
  )
}

export default Head