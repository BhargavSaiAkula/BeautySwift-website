import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' >
     <div className='footer-content'>
      <div className='footer-content-left'>
         <img src={assets.logo} alt=""/>
         <p>
         Welcome to beauty-swift , where beauty and professionalism converge! We're your go-to destination for all things hair, skin, and nails. Follow us for expert tips, trends, and behind-the-scenes glimpses into our stylish world.  
         </p>
         <div className='footer-social-icons'>
          <img src={assets.facebook_icon} alt='' />
          <img src={assets.twitter_icon} alt='' />
          <img src={assets.linkedin_icon} alt='' />
         </div>
        </div>
        <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Booking</li>
            <li>Privacy Policy</li>
        </ul>

       </div>
        <div className='footer-content-right'>
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-212-455-7890</li>
            <li>contact@beautySwift.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
         copyright 2024 @ beauty-swift.com-All Right Reserved.
      </p>
    </div>
  )
}

export default Footer