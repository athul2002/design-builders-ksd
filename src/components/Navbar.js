import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Logo from '../pics/logo.png'
import '../styles/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'


function Navbar() {
 const [click,setClick]=useState(false)
 const handleClick=()=> setClick(!click)
  return (
    <div className='navbar'>
        <div className='leftside' >
            <img src={Logo} alt='Error while loading'></img>
        </div>  
      
        <div className='rightside'>
          <div className='Navmob'>
          <div className='navbar-container container'>
          <div className='menu-icon' onClick={handleClick}>
            {click? <FaTimes/>:<FaBars/>}
          </div>
          <ul className={click?'nav-menu active':'nav-menu'} sty>
            <li className='nav-item'>
            <Link to='/' onClick={useState(false)}>Home</Link>
            </li>
            <li className='nav-item'>
            <Link to='/projects'  onClick={useState(false)}>Projects</Link>
            </li>
            <li className='nav-item'>
            <Link to='/services'onClick={useState(false)}>Services</Link>
            </li>
            <li className='nav-item'>
            <Link to='/about' onClick={useState(false)}>About</Link>
            </li>
            <li className='nav-item'>
            <Link to='/contact' onClick={useState(false)}>Contact</Link>
            </li>
          </ul>
         </div>
          </div>
        
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
           
        </div>
    </div>
  )
}



export default Navbar