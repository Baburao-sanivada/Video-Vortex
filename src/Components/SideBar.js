import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { sideBarIconList } from '../utils/sideBarIconList';

const SideBar = () => {
  const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen);
  return !isMenuOpen?<></>:(
    <div className='p-5 pt-1 static'>
        <ul>
          {
            sideBarIconList.map((icondata)=> <Link to="/"><li className='flex font-semibold items-center py-2 rounded-lg hover:bg-slate-100 px-4'>{icondata.key}<span className='text-md px-4'>{icondata.name}</span></li></Link>)
          }
        </ul>
    </div>
  )
}

export default SideBar