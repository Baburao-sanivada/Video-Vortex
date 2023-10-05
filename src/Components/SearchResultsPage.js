import React, { useEffect ,useState} from 'react'
import SideBar from './SideBar'
import Head from './Head'
import { useSearchParams } from 'react-router-dom'
import { Google_api_key, Search_results_api } from '../utils/paths'
import SearchVideoCard from './SearchVideoCard'
import { Link } from 'react-router-dom'

const SearchResultsPage = () => {
  const [params]=useSearchParams();
  const query=params.get("q");
  const [searchresults,setSearchResults]=useState([]);
  useEffect(()=>{
    getSearchData();
  },[])
  console.log(searchresults);
  const getSearchData=async ()=>{
    const data=await fetch(Search_results_api+query+"&key="+Google_api_key);
    const json=await data.json();
    setSearchResults(json?.items);
    console.log(searchresults);
  } 

  return (
    <div className='p-2 w-full'>
      {
        searchresults.map((result)=> <Link key={result?.id?.videoId} to={"/watch?v="+result?.id?.videoId}>
        <SearchVideoCard 
        data={result?.snippet}/>
        </Link>
        )
      }
    </div>
  )
}

export default SearchResultsPage