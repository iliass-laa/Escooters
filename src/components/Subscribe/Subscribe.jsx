import React from 'react'
import './Subscribe.css'
import {motion} from 'framer-motion'

const Subscribe = () => {
  return (
   <section className="sub-wrapper">
    <div className="paddings innerWdth sub-container">
        <div className="flexCenter title">
            <span className="primaryText">Subcribe To Newsletter</span>
            <span className='secondaryText'>Subscribe to our newsletter to get amazing offers in future.</span>
        </div>
        <div className="flexCenter innerWidth paddings search-Bar">
            <input className='inputext' type="email" placeholder='    Enter your Email.'/>
            <a href="/SignUp" className='buttonn'>
                     
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
                    className='button2 button'
                    >Subcribe
                    </motion.button>
                    </a>

            {/* <button className='button2 button'  ></button> */}
        </div>
    </div>
   </section>
  )
}

export default Subscribe