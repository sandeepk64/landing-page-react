import React,{useState} from 'react'
import './App.css'
import { Link } from 'react-scroll'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <Features/>
     <Offer/>
     <About/>
     <Contact/>
    </>
  )
}

export default App
