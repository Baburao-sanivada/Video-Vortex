import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { sideBarIconList } from '../utils/sideBarIconList';

// Side Bar with Fixed Side Bar Items
const SideBar = () => {
  // Subscribe to Store
  const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen);
  return !isMenuOpen?<></>:(
    <div className='p-5 pt-1 pr-3 shadow-lg  bg-white dark:bg-slate-800 dark:text-slate-300'>
        <ul>
          {
            sideBarIconList.map((icondata,index)=> <Link key={icondata.name+index} to={"/"+(icondata.name!="Home"?`search?q=${icondata.name}`:"")}><li className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600">{icondata.key}<span className='px-4'>{icondata.name}</span></li></Link>)
          }
        </ul>
    </div>
  )
}

export default SideBar