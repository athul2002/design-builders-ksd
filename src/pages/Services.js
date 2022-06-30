import React from 'react'
import {Box} from '@mui/material'
import '../styles/Services.css'
import services1 from "../pics/constrwork.jpg"
import services2 from "../pics/buildingplan.jpg"
import services3 from "../pics/estimate.jpg"
import services4 from "../pics/supervision.jpg"
import { useEffect } from "react";
import services from '../pics/backimage.webp'
function Services() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div className='Services'>
       <div className='Servicestop' style={{backgroundImage:`url(${services})`}}>
       <h1>
        SERVICES
      </h1> <br/>
       </div>
       <div className='Servicesbottom'>
       <p>
         Check Out
       </p>
       <h2>
         THE SERVICES WE OFFER
       </h2>
       </div>
       <div className='Servicesoffer'>
       <div className='Servicesoffer1'>
        <Box className='s1'border={3}>
          <img src={services1} alt='Error'/>
          <h1>
            CONTRACT WORKS
          </h1>
          <p>
          We take full building construction contract & On -time completion of the work will be guaranteed with cost effective means of construction.
          </p>

        </Box>
         <Box className='s1' border={3}>
          <img src={services2}  alt='Error'/>
          <h1>
            PERMIT CONSULTANT
          </h1>
          <p>
          We will assist you in obtaining all required building permits, from the beginning to the end of the construction process.

Provides all construction drawings (building plan ,site plan, service plan ,key plan etc) & online documentation required for permit approval from concerned authority
          </p>

        </Box>
    </div>
    <div className='Servicesoffer2'>

        <Box className='s1' border={3}>
          <img src={services3}  alt='Error'/>
          <h1>
            ESTIMATE
          </h1>
          <p>
          Provides Building Estimates and project Reports required for bank loans
          </p>

        </Box> 
        <Box className='s1' border={3}>
          <img src={services4}  alt='Error'/>
          <h1>
            SUPERVISION
          </h1>
          <p>
           
We supervise your construction works with experienced engineers and ensure the  quality of work as per client requirements.
          </p>
        </Box> 

      </div> 
     
       </div>
    </div>
     
  
  )
  
}

export default Services