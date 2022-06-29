import React from 'react'
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='SocialMedia'>

        <a href='mailto:designbuilderskkl@gmail.com' target='_blank'>
        <MailIcon/>
        </a>   
        <a href='https://wa.me/9447653632' target='_blank'>
         <WhatsappIcon/>   
         </a>
         <p> &copy;2022 designbuilderskkl.com </p>

        </div>
    </div>
  )
}

export default Footer;