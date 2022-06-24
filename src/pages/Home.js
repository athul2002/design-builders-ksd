import React from 'react'
import bannerImage from '../pics/backgroundhome.jpg'
import '../styles/Home.css'
import { useEffect } from "react";
import {Link} from 'react-router-dom'
function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
   
      <div className='home' style={{backgroundImage:`url(${bannerImage})`}}>
        <div className='headerContainer'>
        <h1>DESIGN BUILDERS</h1>
        <h3 >KUTTIKOL-BEDAKAM</h3>
        <p>We design your dreams</p>
        <Link to="/projects">
           <button>
             VIEW PROJECTS
          </button> 
        </Link>
        </div>

      </div>
    
  )
}

export default Home