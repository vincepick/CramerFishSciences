import React from 'react';
import gpt3Logo from '../../assets/cramerLogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      {/* <h1 className="gradient__text">Don't Forget To Sign Up To Our Mailing List</h1> */}
      
    </div>

    <div className="gpt3__footer-btn">
      <p>Request A Consultation</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>7525 NE Ambassador Pl., Suite C
        Portland, OR 97220 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Locations</h4>
        <p>Oregon</p>
        <p>Idaho</p>
        <p>Washington</p>
        <p>California</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Phone (888) 224-1221</p>
        <p>Fax (503) 491-9577</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>©2024 Cramer Fish Sciences. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;