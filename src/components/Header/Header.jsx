import React from 'react'
import { useState } from 'react'
import './Header.css'
import meroLogo from '../assets/logo.png'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import {motion} from 'framer-motion'
 

const Header = () => {

  const [menuOpened , setMenuOpened]= useState(false);
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right : !menuOpened  && "-100%"  };
    }
  }
  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper">
    
        <div className="flexCenter paddings  h-container">
              <div className="flexColStart left-head">
              <a href="/">
              <img  src={meroLogo} alt="l" className='logo'/>
              </a>
            </div>
            <OutsideClickHandler
            onOutsideClick={closeMenu}>
           <div className="flexCenter menu" 
              style={getMenuStyles(menuOpened)}>
              <div className="flexCenter middle-header">
                <a href="/Products">Products</a>
                <a href="AboutUs">About Us</a>
                <a href="Contact">Contact</a>
              </div>
              <div className="flexCenter right-header">
                  <a href="/SignUp">SIGN UP</a>
                  
                  <a href="/LogIn">
                  <motion.button
                    initial={{ opacity: 1}}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: '#7FE1CF', // Change background color on hover
                        color: 'white', // Change text color on hover
                    }}
                    whileTap={{
                        scale: 0.5,
                        backgroundColor: '#7FE1CF', // Change background color on tap
                        color: 'white', // Change text color on tap
                    }}
                    className='button h-button'
                    >
                     LOG IN
                    </motion.button>
                  </a>
              </div>
            </div>
            </OutsideClickHandler>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
        
    </section>
  )
}

export default Header

// !menuOpened  && 