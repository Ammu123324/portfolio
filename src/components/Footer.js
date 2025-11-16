import"./FooterStyles.css"
import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk ,FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">  <h4>Address</h4>
          <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight:"1rem"}}/>
           
            <div>
             
              <p>Coimbatore</p>
           
            </div>
          </div>
<div className="phone">
  <h4>
  <FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>
  8438715357
</h4>
</div>

<div className="email">
  <h4>
  <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>
  thenmozhidhavamani524@gmail.com
</h4>
</div>


          </div>

          <div className="right">
            <h4>About Me</h4>
            <p> I'm actively lookingfor opportunities to grow and learn.</p>
            <p>Open to internships and junior roles.</p>
            <p>Feel free to reach out for a chat or collaboration.</p>
          <div className="social">
            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer;
