import React from 'react'

const Button = ({name, bgOn}) => {
  return (
    <button className={`w-32 px-4 py-2 rounded-md text-sm ${bgOn ? "bg-primary text-white" : "text-black" }`}>
        {name}
    </button>
  )
}

export default Button