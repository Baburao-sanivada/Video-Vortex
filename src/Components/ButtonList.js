import React from 'react'
import Button from './Button'

const list=["All","New To You","Live","Gaming","Cricket","Music","Movies","Comedy","Action","Software"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((item,index)=> <Button key={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList