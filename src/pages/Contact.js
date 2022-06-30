import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Box} from '@mui/material'
import React from 'react'
import '../styles/Contact.css'
import Phone from '@mui/icons-material/PhoneAndroid'
import Mail from '@mui/icons-material/Mail'
import Location from '@mui/icons-material/LocationCity'
import contact from '../pics/backimage.webp'
import { useEffect } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_foasrka', 'template_s2rs4ni', form.current, 'GlNtd3V9iwdQxQRqh')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 function myfun(){
  if(alert('Message sent')){}
else    window.location.reload(); 
 } 

  return (
    <div className='Contact' >
      <div className='top' style={{backgroundImage:`url(${contact})`}}>
        <h1>
          CONTACT US
        </h1>
      </div>
      <div className='bottom'>
        <div className='bottom1'>
         <Box border={3} height='6.2cm' width='6cm' className='b1' borderColor='rgb(169,169,169)' borderRadius="0.5cm">

          <div className='Adress'>

             <Location style={{color:'rgb(252, 107, 3)'}}/>
             <h2>
             ADDRESS
             </h2>
             <p>
                Near Panchayath Office<br/> 
                Kuttikol <br/>
                Kuttikol PO <br/>
                Kasaragod <br/>
                Kerala
             </p>
          </div>
         </Box> 
         <Box border={3} height='6.2cm' width='6cm' className='b4' borderColor='rgb(169,169,169)' borderRadius="0.5cm">
           <div className='Adress'>
             <Location style={{color:'rgb(252, 107, 3)'}}/>
             <h2>
               ADDRESS
             </h2>
             <p>
               Near Panchayath Office<br/> 
               Bedakam<br/>
               Bedakam PO <br/>
               Kasaragod <br/>
               Kerala
             </p>
          </div>
         </Box> 
         </div>
         <div className='bottom2'>
         <Box border={3} height='6.2cm' width='6cm' className='b2' borderColor='rgb(169,169,169)' borderRadius="0.5cm">
             <div className='Mail'>
               <Mail style={{color:'rgb(252, 107, 3)'}}/>
               <h2>
                 MAIL ID
               </h2>
               <a href='mailto:designbuilderskkl@gmail.com' target='_blank' style={{textDecoration:'none'}} rel="noreferrer">
                  designbuilderskkl@gmail.com
               </a>

             </div>
         </Box>
         <Box border={3} height='6.2cm' width='6cm' className='b3' borderColor='rgb(169,169,169)' borderRadius="0.5cm">
             <div className='Phone'>
               <Phone style={{color:'rgb(252, 107, 3)'}}/>
               <h2>
               PHONE NUMBER
               </h2>
               <p>
               9447653632<br/>9745417255
               </p>
             </div>
         </Box>
         </div>
      </div>
      <div className='bottommost'>
          <div className='bottommostleft'>
       <iframe className='location1'
       title='location'
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.5799846072746!2d75.2096138140044!3d12.477667991181283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4892e0d3bfd4f%3A0x4728be4c0f248f49!2sKuttikol%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1654705192709!5m2!1sen!2sin" 
       width="400" height="390"loading="lazy" r
       eferrerpolicy="no-referrer-when-downgrade"></iframe>

      <iframe title='L' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.48890850898363!2d75.16600792474746!3d12.461536392152105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba488a2d4c532eb%3A0xb0be3203b4d7f7ee!2sBedadka%20Panchayath!5e0!3m2!1sen!2sin!4v1654830760650!5m2!1sen!2sin" 
      width="400" height="390" className='location2'></iframe>
      </div>
     <div className='bottommostright'>
       <h1 >
         GET IN TOUCH
       </h1>   
       <p>
       Have some suggestions or need to contact us?
       </p>
       <div className='response'>
       <form ref={form} onSubmit={sendEmail}>
      <label ></label>
      <input type="text" name="user_name" className='r' placeholder='Name'/>
      <label></label>
      <input type="email" name="user_email" className='r'placeholder='Email'  />
      <label ></label>
       <input name='user_number' type='number' placeholder='Phone Number' className='r'></input>
      <label></label>
      <br/>
      <textarea name="message" placeholder='Message' rows="6" cols="85" className='m'/><br/>
      <input type="submit" value="Send Message" className='button' onClick={myfun} />
    </form>
       </div>
   
    </div>
      </div>
    </div>
  );
};