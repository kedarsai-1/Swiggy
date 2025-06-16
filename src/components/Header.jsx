import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import {Link } from "react-router-dom"
const Header=()=> {
  const [Login,setLogin] = useState("Login");
  return (
    <div className='header'>
        <div className='logo-container'>
        <img src ={LOGO_URL} alt="something">
        </img>
    </div>
    <div className='nav-items'> 
        <ul>
           <li><Link to ="/">Home</Link></li> 
           <li> <Link to ="/about">About Us</Link></li>
           <li><Link to ="/contact">Contact Us</Link></li>
           <li><Link to ="/cart">Cart</Link></li>
           <button className='login-btn' onClick={()=>{
            Login ==="Login"?
            setLogin("Logout")
          : setLogin("Login")}}>{Login}</button>
        </ul>
    </div>
    </div>
    
  )
}

export default Header