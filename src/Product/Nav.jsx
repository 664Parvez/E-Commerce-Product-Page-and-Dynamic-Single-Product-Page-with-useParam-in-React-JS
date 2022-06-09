import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Product'>Product</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact</NavLink>  
            </li>
        </ul>
        </>
    )
}
export default Nav