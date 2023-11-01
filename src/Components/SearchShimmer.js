import React from 'react'

const SearchShimmer = () => {
  return (
    <div className='grid md:grid-cols-12  bg-gray-50 mb-2 dark:bg-slate-800 max-sm:px-10 max-sm:pb-10'>
        {/* Thumbnail */}
        <div className='md:col-span-3 col-span-12 bg-gray-300 mr-2 rounded-lg dark:bg-slate-600 h-40'></div>

        {/* Details */}
        <div className='max-md:h-40 md:col-span-8 col-span-12 bg-gray-100 grid grid-rows-4 py-1 dark:bg-slate-800'>
            <div className='row-span-1  py-2 w-11/12'><p className='bg-gray-300 h-1/2 rounded-lg '></p> </div>
            <div className='row-span-1  py-2 w-11/12'><p className='bg-gray-300 h-1/2 rounded-lg '></p> </div>
            <div className='row-span-1  py-2 w-3/4'><p className='bg-gray-300 h-1/2 rounded-lg'></p> </div>
            <div className='row-span-1  py-2 w-1/2'><p className='bg-gray-300 h-1/2 rounded-lg'></p> </div>
        </div>
    </div>
  )
}

export default SearchShimmer