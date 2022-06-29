import React from 'react'
import '../styles/About.css'
import backgroundabout from '../pics/backgroundabout.jpg'
import {Link} from 'react-router-dom'
import pkimage from '../pics/pk.jpeg'
import rkimage from '../pics/rk.jpeg'
import {Box} from '@mui/material'
import backimage from '../pics/backimage.webp'
import { useEffect } from "react";

function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    
    <div className='About'>
      <div className='top' style={{backgroundImage:`url(${backimage})`}}>
       <h1>
        ABOUT US
      </h1> <br/>
      
      </div>
     
      <div className='bottom'>
        <div className='Aboutleft'>
           <h2>ABOUT DESIGN BUILDERS</h2>
           <p>Design builders is a construction company with head office located at Kuttikol and with a branch at Bedakam.
              Greentech Builders was founded by a group of seasoned and experienced professionals to tap into the real estate market in Kerala. From its inception, the organization has seen tremendous growth, building from strength to strength. And as a result, today the Company's name has become synonymous with top-notch construction services in Kerala.
            <br/><br/>
              We at Greentech are committed to design, develop and construct affordable yet luxurious commercial and residential projects with the highest standards of quality and customer satisfaction. We strive to be ecologically and socially responsible citizens and prevent environmental pollution and depletion of natural resources. 
          </p>
          <Link to='/projects'>
          <button>
            VIEW PROJECTS
          </button>
          
          </Link>
        </div>
        <div className='Aboutright' >
          <img src={backgroundabout} alt='Error'></img>

         </div>
      </div>
      <div className='Aboutbottommost'>
        <h1>
          OUR TEAM
        </h1>
        <div className='teamimage'>
        <div className='rkimage'>
          <img src={rkimage} alt='Error'></img>
          <Box bgcolor="white" className='rkb' >
              K Radhakrishnan
          </Box>
        </div>
        <div className='pkimage'>
           <img src={pkimage} alt='Error'></img>
           <Box bgcolor="white" className='pkb' >
              Prajul Krishna K
          </Box>
        </div>
        </div>

       
      </div>
     
    </div>
  )
}

export default About