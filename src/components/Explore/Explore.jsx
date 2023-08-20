import React from 'react'
import './Explore.css'
import scooterImage from '../assets/Explore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import {faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
// import { BiSolidFastForwardC } from "react-icons/bi";


const Explore = () => {
  return (
    <section className="Ex-wrapper">
      <motion.div
                    initial={{y:"2rem",opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition = {{
                        duration:2,
                        type:"spring"
                    }}
                    className='Ti'
                    >
        <div className=" flexCenter Exp-container">
            {/* Left Side */}
            <div className="flexColStart Ex-left">
                <div className="titles">
                
                    <span className='secondaryText'>LET'S RIDE</span><br/>
                    <span className='primaryText'>THE FUTURE.</span>
                    <br/><br/>
                   <div className="line-container"></div>
                   
                   <p >Simple and sleek design with users <br/>in mind.</p>
                </div>
                <div className="Ex-footer">
                       <a href="/Products">
                 <motion.button
                    initial={{ opacity: 1 }}
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
                    className='flexColStart button button1'
                    >
                       <FontAwesomeIcon className='f-icon' icon={faArrowRightLong} />
                    </motion.button>
                    </a>
                 
                   
                  <span className='flexCenter'>Buy Now !</span>
                  <span >Watch our <br/>video how <br/>it works</span>
                  <div className="icon-container flexCenter">
                  <FontAwesomeIcon className='V-icon' icon={faCirclePlay} />
                  </div>
                
                </div>
                </div>
                {/* Right Side */}
                <div className="flexCenter Ex-right">
                  <div className="gray-background"/>
                    <div className="image-container">
                    <img src={scooterImage} alt="atay" />

                    </div>
                </div>
            
        </div>
        
      </motion.div>
    </section>
  )
}

export default Explore