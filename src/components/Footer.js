import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='SocialMedia'>

         <FacebookIcon/>
         <MailIcon/>   
         <WhatsappIcon/>   
         <p> &copy;2022 designbuilderskkl.com </p>

        </div>
    </div>
  )
}

export default Footer;