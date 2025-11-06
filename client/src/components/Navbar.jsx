import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">Cart</Link>
        <Link to="/order">Order</Link>
        <Link to="/login">Login</Link>
      
    </div>
  )
}

export default Navbar
