import React from 'react'
import Button from '../../Components/Button'

const Navbar = () => {
  return (
    <nav className='flex'>
        {/* Logo */}
        <div className='flex'>
            <img src="Icon.svg" alt="" />
            <img src="Nexcent.svg" alt="" className='ml-2'/>
        </div>

        {/* Nav links */}
        <ul className='flex w-full justify-evenly items-center'>
            <li>Home</li>
            <li>service</li>
            <li>feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
        </ul>

        {/* Call to Action */}
        <Button name={"Login"} bgOn={false}/>
        <Button name={"Sing up"} bgOn={true}/>
    </nav>
  )
}

export default Navbar