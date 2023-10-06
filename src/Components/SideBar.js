import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { sideBarIconList } from '../utils/sideBarIconList';

const SideBar = () => {
  const isMenuOpen=useSelector((store)=> store.appSlice.isMenuOpen);
  return !isMenuOpen?<></>:(
    <div className='hidden sm:block p-5 pt-1 pr-3 static'>
        <ul>
          {
            sideBarIconList.map((icondata,index)=> <Link key={icondata.name+index} to="/"><li className="flex font-medium items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2">{icondata.key}<span className='px-4'>{icondata.name}</span></li></Link>)
          }
        </ul>
    </div>
  )
}

export default SideBar