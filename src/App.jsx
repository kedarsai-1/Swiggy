import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import  ReactDOM from 'react-dom/client';
import './App.css'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About'
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



function App() {
  const [userName,setUserName]= useState();
useEffect(()=>{
  const data = {
    name:"kedar sai"
  }
  setUserName(data.name);

},[])


  return (
    <Provider store ={appStore}>
    <UserContext.Provider value ={{ loggedInUser:userName,setUserName}}>
    <>
     <Header/>
   <Outlet/>
    </>
    </UserContext.Provider>
    </Provider>
  )
}



export default App
