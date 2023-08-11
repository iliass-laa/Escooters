import React from 'react'
import './Footer.css'
import pic from '../../components/assets/Union.png'
import { FaTwitter,FaFacebookF,FaInstagram,FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="footer-wrapper">
        <div className=" footer-container">
            <div className="footer-left">
                <div className="f-image-container">
                <img src={pic} alt="" />
                </div>
            </div>
            <div className="flexCenter paddings innerWidth footer-right">
                <div className="flexColStart F about">
                    <h2>About</h2>
                    <span>Company</span><span>Teams</span><span>Profile</span><span>Careers</span>
                </div>
                <div className="flexColStart F Resources">
                    <h2>Resources</h2>
                    <span >Contact</span><span>Application</span><span>FQA Features</span>
                </div>
                <div className="flexColStart F Legals">
                    <h2>Legals</h2>
                    <span>CopyRight Privacy</span><span>Policy Disclaimer</span><span>Terms</span>
                    <div className="flexCenter icons-container">
                        <FaTwitter />
                        <FaFacebookF/>
                        <FaInstagram/>
                    </div>
                </div>
                {/* <FontAwesomeIcon icon={FaFreebsd} /> */}
               
            </div><br />
            <div className=" flexCenter foo-footer">
            <FaRegCopyright/>
            <span> CopyRight 2021. All Rights reserved.</span>

            </div>
            
        </div>
        
    </section>
  )
}

export default Footer
