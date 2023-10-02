import React, { useEffect, useState } from 'react' 
import { hamburgerPath, user_icon, youtubeLogo } from '../utils/paths'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {youtube_search_api} from "../utils/paths"
import { AddCacheItem } from '../utils/searchCacheSlice';


const Head = () => {

  const [QueryText,setQueryText]=useState("")
  const dispather=useDispatch();
  const [searchSuggestions,setSearchSuggestions]=useState([]);
  const [showSuggestions,setshowSuggestions]=useState(false);
  const suggestions=useSelector((store)=> store.search);

  const HamburgerOnClickHandler=()=>{
    dispather(toggleMenu());
  }

  useEffect(()=>{

    const Timer=setTimeout(()=>{
      if(suggestions[QueryText]){
        setSearchSuggestions(suggestions[QueryText]);
      }
      else{
        getData();
      }
    },200);


    return ()=>{
      clearTimeout(Timer);
    }
  },[QueryText])

  const getData=async ()=>{
    const data=await fetch(youtube_search_api+QueryText);
    const json=await data.json();
    setSearchSuggestions(json[1]);
    dispather(AddCacheItem({[QueryText]:json[1]}))
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
        <div>
          <input 
          value={QueryText}
          className="w-1/2 border border-gray-400 rounded-l-full py-2 pl-6" 
          type='text'
          onChange={(e)=>{
            setQueryText(e.target.value);
          }}
          onFocus={()=>{
            setshowSuggestions(true);
          }}
          onBlur={()=>{
            setshowSuggestions(false);
          }}/>
          <button className="border border-gray-400 rounded-r-full py-2 px-3 bg-gray-100">🔍</button>
        </div>
        { showSuggestions && <div className='fixed bg-white w-96 px-5 py-2 rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {searchSuggestions.map(s=> <li key="s" className='m-2 hover:bg-gray-50'> 🔍 {s}</li>)}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={user_icon}/>
      </div>
    </div>
  )
}

export default Head