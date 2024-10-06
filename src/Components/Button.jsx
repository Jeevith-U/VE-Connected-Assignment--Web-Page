import React from 'react'

const Button = ({name, bgOn}) => {
  return (
    <button className={`w-max px-4 py-2 rounded-md text-sm font-medium ${bgOn ? "bg-primary text-white" : "text-primary" }`}>
        {name}
    </button>
  )
}

export default Button