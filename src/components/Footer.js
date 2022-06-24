import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailIcon from '@material-ui/icons/Mail'
import WhatsappIcon from '@material-ui/icons/WhatsApp'
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