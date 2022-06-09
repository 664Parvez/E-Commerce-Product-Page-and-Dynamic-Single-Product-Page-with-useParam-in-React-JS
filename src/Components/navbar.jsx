import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Blog'>Blog</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar