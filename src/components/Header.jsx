import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import {Link } from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus';
const Header=()=> {
  const [Login,setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50' >
        <div className='logo-container'>
        <img className='w-26'src ={LOGO_URL} alt="something">
        </img>
    </div >
    <div className='flex items-center'> 
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status:{onlineStatus ? "✅":"🔴"}</li>
           <li className='px-4'><Link to ="/">Home</Link></li> 
           <li className='px-4'> <Link to ="/about">About Us</Link></li>
           <li className='px-4'><Link to ="/contact">Contact Us</Link></li>
           <li className='px-4'><Link to ="/cart">Cart</Link></li>
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