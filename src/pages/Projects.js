import React from 'react'
import {Box} from '@mui/material'
import p1 from '../pics/1.jpeg'
import p2 from '../pics/2.jpeg'
import p3 from '../pics/3.jpeg'
import p4 from '../pics/4.jpeg'
import p5 from '../pics/5.jpeg'
import p6 from '../pics/6.jpeg'
import p7 from '../pics/7.jpeg'
import p8 from '../pics/8.jpeg'
import p9 from '../pics/9.jpeg'
import p10 from '../pics/10.jpeg'
import p11 from '../pics/11.jpeg'
import p12 from '../pics/12.jpeg'
import '../styles/Projects.css'
import { useEffect } from "react";
import projects from '../pics/backimage.webp'
function Projects() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div className='Projects'>
       <div className='projecttop' style={{backgroundImage:`url(${projects})`}}>
        <h1>
          PROJECTS
        </h1>
       </div>
       <div className='projectbottom'>
       <p style={{color:'gray'}}>Check out</p>
      <h2>Designs of our construction works</h2>
       </div>
    
      <div className='ProjectImages1'>
        <Box className='p1' border={4}>
          <img src={p1} alt='Error'/>
        </Box>
        <Box className='p2' border={4}>
          <img src={p2} alt='Error'/>
        </Box>
      
      </div>
      <div className='ProjectImages2'>
        <Box className='p3' border={4}>
          <img src={p3} alt='Error'/>
        </Box>
        <Box className='p4' border={4}>
          <img src={p4} alt='Error'/>
        </Box>
      
      </div>
      <div className='ProjectImages3'>
        <Box className='p5' border={4}>
          <img src={p5} alt='Error'/>
        </Box>
        <Box className='p6' border={4}>
          <img src={p6} alt='Error'/>
        </Box>
      
      </div> <div className='ProjectImages4'>
        <Box className='p7' border={4}>
          <img src={p7} alt='Error'/>
        </Box>
        <Box className='p8' border={4}>
          <img src={p8} alt='Error'/>
        </Box>
      
      </div> <div className='ProjectImages5'>
        <Box className='p9' border={4}>
          <img src={p9} alt='Error'/>
        </Box>
        <Box className='p10' border={4}>
          <img src={p10} alt='Error'/>
        </Box>
      
      </div> <div className='ProjectImages6'>
        <Box className='p11' border={4}>
          <img src={p11} alt='Error'/>
        </Box>
        <Box className='p12' border={4}>
          <img src={p12} alt='Error'/>
        </Box>
      
      </div>
    </div>
  )
}

export default Projects