import React from 'react'
import Button from './Button'

const list=["All","Live","Gaming","Cricket","Music","Movies","Comedy","Action","Software","Computers"]

const ButtonList = () => {
  return (
    <div className='flex flex-row ml-4'>
      {
        list.map((item,index)=> <Button key={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList