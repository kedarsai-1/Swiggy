import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import  ReactDOM from 'react-dom/client';
import './App.css'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About'
import { Outlet } from 'react-router-dom';
function App() {


  return (
    <>
     <Header/>
   <Outlet/>
    </>
  )
}



export default App
