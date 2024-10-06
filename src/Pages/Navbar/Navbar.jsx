import React from 'react'

const Navbar = () => {
  return (
    <nav>
        {/* Logo */}
        <div className='flex'>
            <img src="Icon.svg" alt="" />
            <img src="Nexcent.svg" alt="" className='ml-2'/>
        </div>

        {/* Nav links */}
        <ul>
            <li>Home</li>
            <li>service</li>
            <li>feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
        </ul>

        {/* Call to Action */}
        <button>Login</button>
        <button>Sign up</button>
    </nav>
  )
}

export default Navbar