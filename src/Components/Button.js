import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="px-3 py-1 my-2 mx-1 items-center border border-gray-100 rounded-lg bg-gray-100 hover:bg-gray-200">{name}</button>
    </div>
  )
}

export default Button