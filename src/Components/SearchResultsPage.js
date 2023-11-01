import React, { useEffect ,useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Google_api_key, Search_results_api } from '../utils/constants'
import SearchVideoCard from './SearchVideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setChannelId } from '../utils/channelIdSlice'
import { closeMenu } from '../utils/appSlice'

// Search Results
const SearchResultsPage = () => {
  const [params]=useSearchParams();
  const query=params.get("q");
  const [searchresults,setSearchResults]=useState([]);
  const dispatcher=useDispatch();

  useEffect(()=>{
    getSearchData();
    dispatcher(closeMenu())
  },[query])

  const getSearchData=async ()=>{
    const data=await fetch(Search_results_api+query+"&key="+Google_api_key);
    const json=await data.json();
    setSearchResults(json?.items);
  } 

  return (
    <div className='p-2 w-full dark:bg-slate-800 overflow-y-hidden'>
      {
        searchresults.map((result)=> <Link 
        key={result?.id?.videoId} 
        to={"/watch?v="+result?.id?.videoId} 
        onClick={()=>{
          dispatcher(setChannelId(result?.snippet?.channelId))
        }}>

        <SearchVideoCard 
        data={result?.snippet}/>
        </Link>
        )
      }
    </div>
  )
}

export default SearchResultsPage