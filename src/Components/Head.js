import React, { useEffect, useState } from 'react' 
import youtubelogoLightMode from "../utils/Images/youtubelogoLightMode.png"
import youtubelogoDarkMode from "../utils/Images/yt-logoDrakMode.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {youtube_search_api} from "../utils/paths"
import { AddCacheItem } from '../utils/searchCacheSlice';
import {BiUserCircle} from "react-icons/bi";
import {GoSearch} from "react-icons/go"
import {AiOutlineMenu} from "react-icons/ai";
import {MdOutlineDarkMode} from "react-icons/md"
import {MdOutlineLightMode} from "react-icons/md"
import {IoIosMenu} from "react-icons/io"

const Head = () => {

  const [QueryText,setQueryText]=useState("")
  const dispather=useDispatch();
  const [searchSuggestions,setSearchSuggestions]=useState([]);
  const [showSuggestions,setshowSuggestions]=useState(false);
  const suggestions=useSelector((store)=> store.search);

  const [darkMode,setDarkMode]=useState(false);

  const toggletheme=()=>{
    
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
    
  }


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
    <div className="sticky top-0 grid grid-flow-col py-3 px-3 bg-white dark:bg-slate-800 w-full">

      {/* Logo and HamburgerMenu */}
      <div className="flex col-span-1 items-center mx-4">
        <IoIosMenu 
        onClick={HamburgerOnClickHandler}
        className="text-3xl dark:text-white cursor-pointer hidden sm:block"/>
        <img className="h-6 mx-4" alt="youtubeLogo" src={!darkMode?youtubelogoDarkMode:youtubelogoLightMode}></img>
      </div>

      {/* Search */}

      <div className="col-span-10 ml-24">
        <div className='group flex flex-row'>
          <input 
          value={QueryText}
          className="w-2/3 border border-gray-400 rounded-l-full py-1 pl-5 group-focus-within:border-sky-300 dark:bg-slate-800" 
          type='text'
          placeholder='Search'
          onChange={(e)=>{
            setQueryText(e.target.value);

            
          }}
          onFocus={()=>{
            setshowSuggestions(true);
          }}
          onBlur={()=>{
            setshowSuggestions(false);
          }}/>

          {/* Search Button */}
          <button 
          className="border border-gray-400 rounded-r-full py-2 px-5 flex justify-center items-center  hover:bg-gray-100" 
          onClick={()=>window.location.assign("search?q="+QueryText)}>
          <GoSearch className='text-xl'/></button>
        </div>
        {/* Suggestions */}
        { showSuggestions && QueryText!="" &&
        <div className='fixed bg-white rounded-xl border border-gray-100 shadow-lg'>
          <div className=' py-2'>
          <ul>
            {searchSuggestions.map((s,index)=> <li key={"s"+index} className='hover:bg-gray-200 '><div className='flex lg:w-[23rem] lg:mr-[8.3rem] px-5 items-center'> <GoSearch className='text-lg m-2 mr-4'/> <span>{s}</span></div></li>)}
          </ul>
        </div>
        </div>}
      </div>

      {/* User Icon */}
      <div className="flex justify-center col-span-1 items-center ">
        <BiUserCircle className='text-4xl'/>
      </div>

      {/* DarkMode Icon */}
      <div className='flex items-center'>
        {darkMode?<MdOutlineDarkMode className="text-2xl" onClick={()=>toggletheme()}/>:<MdOutlineLightMode className="text-2xl" onClick={()=>toggletheme()}/>}
      </div>
    </div>
  )
}

export default Head