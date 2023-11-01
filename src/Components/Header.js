import React, { useEffect, useState } from 'react' 
import youtubelogoLightMode from "../utils/Images/youtubelogoLightMode.png"
import youtubelogoDarkMode from "../utils/Images/yt-logoDrakMode.png"
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, setMenu, toggleMenu } from '../utils/appSlice';
import {youtube_search_api} from "../utils/constants"
import { AddCacheItem } from '../utils/searchCacheSlice';
import {BiUserCircle} from "react-icons/bi";
import {GoSearch} from "react-icons/go"
import {MdOutlineDarkMode} from "react-icons/md"
import {MdOutlineLightMode} from "react-icons/md"
import {IoIosMenu} from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowLeftShort} from "react-icons/bs";

const Head = () => {
  const navigate=useNavigate();
  const [QueryText,setQueryText]=useState("")
  const [smSearch,setsmSearch]=useState(false)
  const dispather=useDispatch();
  const [searchSuggestions,setSearchSuggestions]=useState([]);
  const [showSuggestions,setshowSuggestions]=useState(false);
  const suggestions=useSelector((store)=> store.search);

  const [darkMode,setDarkMode]=useState(false);

  
  // setting Initial theme to Light Mode
  document.documentElement.classList.toggle('dark', darkMode);

  // DarkMode toggling
  const toggletheme=()=>{
    
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
    
  }

  // Toggle NavBar
  const HamburgerOnClickHandler=()=>{
    dispather(toggleMenu());
  }
  useEffect(()=>{
    // Hiding SideBar Intially for Sm Screens
    if(window.innerWidth<768) dispather(closeMenu());

  },[])
  useEffect(()=>{
    // Lateny of 200 ms is Set
    const Timer=setTimeout(()=>{
      // Checking in CacheSlice - Debouncing
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


  // API Data for suggestions in Search Bar
  const getData=async ()=>{
    const data=await fetch(youtube_search_api+QueryText);
    const json=await data.json();
    setSearchSuggestions(json[1]);
    dispather(AddCacheItem({[QueryText]:json[1]}))
  }

  // Handling event when clicked enter in search bar
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Navigate");
    navigate("/search?q="+QueryText,{ relative: "path" })
    setshowSuggestions(false);
}

  return (
    <div className="sticky top-0 grid grid-flow-col py-3 md:px-3 px-1 bg-white dark:bg-slate-800 w-full">

      {/* Arrow Left In sm Search To Move to normal Screen */}
      {smSearch && 
      <div className='flex items-center px-0 mx-0'><button
      onClick={()=>{
        setsmSearch(false);
      }}
      ><BsArrowLeftShort className='text-3xl'/></button></div>}
      

      {/* Logo and HamburgerMenu */}
      <div className={`flex col-span-2 md:col-span-1 items-center mx-4 ${smSearch?'max-sm:hidden':''}`}>
        <IoIosMenu 
        onClick={HamburgerOnClickHandler}
        className="text-xl md:text-3xl dark:text-white cursor-pointer"/>
        <Link to="/">
        <img className="h-4 md:h-6 md:mx-4 mx-1" alt="youtubeLogo" src={darkMode?youtubelogoDarkMode:youtubelogoLightMode}>
        </img></Link>
      </div>

      {/* Search */}
      <div className={`${smSearch?'col-span-10':'col-span-10 max-sm:flex max-sm:justify-end'} ml-1 md:ml-24`}>
        <div className={`group flex flex-row `}>
          <input 
          value={QueryText}
          className={`${smSearch?'w-full':'w-3/5 max-sm:hidden'} md:w-2/3 border border-gray-400 rounded-l-full py-1 pl-3 md:pl-5 group-focus-within:border-sky-300 dark:bg-slate-800 dark:text-white`}
          type='text'
          placeholder='Search'
          onChange={(e)=>{
            setQueryText(e.target.value);
          }}
          onFocus={()=>{
            const screenWidth = window.innerWidth;
            if(screenWidth<=768){
              if(!smSearch) setsmSearch(true);
            }
            setshowSuggestions(true);
          }}

          // When not Focused Suggestions are removed
          // Latency of 200s is kept to enable clicking suggestions so that this wont get triggered
          onBlur={() =>{
            // const screenWidth = window.innerWidth;
            // if(screenWidth<=640){
            //   if(smSearch) setsmSearch(false);
            // }
           setTimeout(() => setshowSuggestions(false), 200)
          }
           }
          //  Checking which key is Entered
           onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
           />

          {/* Search Button */}
          <button 
          className={`border border-gray-400 ${!smSearch?'max-sm:border-none max-sm:rounded-full':''} rounded-r-full md:py-2 px-2 md:px-5 flex justify-center items-center  hover:bg-gray-100`}
          onClick={()=>{
          const screenWidth = window.innerWidth;
          if(screenWidth<=768 && !smSearch){
            if(!smSearch) setsmSearch(true);
          }
          else navigate("/search?q="+QueryText,{ relative: "path" })}}>
          <GoSearch className='text-xl max-sm:mt-1 dark:text-white'/></button>
        </div>

        {/* Suggestions */}
        { showSuggestions && QueryText!="" &&
        <div className='fixed bg-white rounded-xl border border-gray-100 shadow-lg dark:bg-slate-800 dark:text-white'>
          <div className=' py-2'>
          <ul>
            {searchSuggestions.map((s,index)=> 
            (<li key={"s"+index} className='hover:bg-gray-100 dark:hover:bg-slate-700'>
              <Link to={"/search?q="+s} onClick={()=>setQueryText(s)} ><div className='flex lg:w-[23rem] lg:mr-[8.3rem] px-5 items-center'><GoSearch className='text-lg m-2 mr-4'/> <span className='mb-1'>{s}</span></div></Link>
              </li>))}
          </ul>
        </div>
        </div>}
      </div>

      {/* User Icon */}
      <div className={`flex justify-center md:col-span-1 col-span-2 items-center ${smSearch?'max-sm:hidden':''}`}>
        <BiUserCircle className='text-3xl md:text-4xl font-normal dark:text-white'/>
      </div>

      {/* DarkMode Icon */}
      <div className={`flex items-center col-span-2 ${smSearch?'max-sm:hidden':'ml-2'}`}>
        {!darkMode?<MdOutlineDarkMode className="text-2xl" onClick={()=>toggletheme()}/>:<MdOutlineLightMode className="text-2xl text-white" onClick={()=>toggletheme()}/>}
      </div>
    </div>
  )
}

export default Head