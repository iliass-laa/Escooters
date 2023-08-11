import React from 'react'
import { useState } from 'react'
import './Header.css'
import meroLogo from '../assets/logo.png'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import {motion} from 'framer-motion'
 

const Header = () => {

  const [menuOpened , setMenueOpened]= useState(false)
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return { right: !menuOpened && "-100%" };
    }
  }
  return (
    <section className="h-wrapper">
    
        <div className="flexCenter paddings  h-container">
              <div className="flexColStart left-head">
              <img src={meroLogo} alt="l" className='logo'/>
            </div>
            <OutsideClickHandler
            onOutsideClick={()=>{setMenueOpened(false)}}>
           <div className="flexCenter menu" style={getMenuStyles(menuOpened)}>
              <div className="flexCenter middle-header">
                <a href="SOMO">Products</a>
                <a href="S">Gallery</a>
                <a href="So">Contact</a>
              </div>
              <div className="flexCenter right-header">
                  <a href=" ">LOG IN</a>
                  
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
                    SIGN UP
                    </motion.button>
                      
                  
              </div>
            </div>
            </OutsideClickHandler>
          <div className="menu-icon" onClick={()=>setMenueOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
        
    </section>
  )
}

export default Header