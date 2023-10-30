import React from 'react'
import Button from './Button'

// Sample Button List Without Functionality
const list=["All","Live","Gaming","Cricket","Music","Movies","Comedy","Action","Software","ReactJs","Redux"]

const ButtonList = () => {
  return (
    <div className='flex flex-row ml-4 dark:bg-slate-800 dark:text-slate-300'>
      {
        list.map((item,index)=> <Button key={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList