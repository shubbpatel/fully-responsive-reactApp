import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";



export default function Footer() {
  return (
    <div className='gpt_footer'>
      <div className="gpt_footer_heading">
        <h1 className='gradient__text' >Do you want to step in to the future before others</h1>
        <div>

        <button>Request Early Access</button>
        </div>
      </div>
      <div className="gpt_footer_content">
        <div className="content gradient__text">
          <img src={logo} alt="" />
          <a>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</a>
        </div>
        <div className="content">
          <h4>Links</h4>
          <a href="">Overons</a>
          <a href="">Social Media</a>
          <a href="">Counters</a>
          <a href="">Contact</a>
        </div>
        <div className="content">
          <h4>Company</h4>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Contact</a>

        </div>
        <div className="content">
          <h4>Get in touch</h4>
          <a href="">Crechterwoord K12 182 DK Alknjkcb</a>
          <a href="">085-132567</a>
          <a href="">info@payme.net</a>

        </div>
       
      </div>
      <div className="copyright">
        <h6>© 2021 GPT-3. All rights reserved.</h6>
      </div>
    </div>
  )
}
