import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../pics/logo.png'
import '../styles/Navbar.css'
import  {useState} from 'react'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
  const [openLinks, setOpenLinks]= useState(false)
  const toggleNavbar = () =>{
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
        <div className='leftside'  id={openLinks?"open":"close"}>
            <img src={Logo} alt='Error while loading'></img>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
            </div>
        </div>  
        <div className='rightside'>
          <button className='b'>
          <Link to='/'>Home</Link>
           </button>
           <button className='b'>
            <Link to='/projects'>Projects</Link>
           </button>
           <button className='b'>
           <Link to='/services'>Services</Link>
           </button>
           <button className='b'>
           <Link to='/about'>About</Link>
           </button>
           <button className='b'>
           <Link to='/contact'>Contact</Link>
           </button >
           <button className='reorderbutton' onClick={toggleNavbar}>
            <ReorderIcon/>
           </button>
        </div>
    </div>
  )
}



export default Navbar