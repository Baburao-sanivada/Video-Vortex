import React from 'react'
import Button from './Button'

const list=["All","Live","Gaming","Cricket","Music","Movies","Comedy","Action","Software","Computer Programming"]

const ButtonList = () => {
  return (
    <div className='flex flex-row overflow-clip'>
      {
        list.map((item,index)=> <Button key={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList