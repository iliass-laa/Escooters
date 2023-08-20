import React from 'react'
import './AboutUs.css'
import "swiper/css"
import {About} from '../../utils/About.js'
import {motion} from 'framer-motion'

const AboutUs = () => {
  return (
   <section className="AboutUs-wrapper">
    <div className="innerWidth paddings flexCenter AboutUs-container">
        <div className='title flexCenter'>
            <span className="primaryText">About Us</span>
        </div>
        <div className="flexColStart paddings innerWidth">
            <h2>Welcome to Electric Wheels!</h2><br />
            <p>At Electric Wheels, we're not just selling electric scooters; we're ushering in a new era of sustainable urban mobility. Our journey began with a simple idea: to provide eco-friendly transportation solutions that are as fun as they are efficient. Today
            , we're proud to offer a range of cutting-edge electric scooters that redefine the way you move through the city.</p><br />
            <h2>Our Mission</h2><br />
            <p>Our mission is to empower individuals with innovative electric scooters that make commuting joyful, reduce our carbon footprint, and bring a sense of freedom back to urban travel. We believe in a future where our streets are quieter, air is cleaner, and our customers are smiling as they zip through traffic.</p><br />
            <h2>The Spark of Inspiration</h2><br />
            <p>The spark that ignited Electric Wheels was a frustration with traffic congestion and a deep desire to contribute to a more sustainable world. Our founder, Emily, found herself spending hours stuck in traffic, yearning for a smarter way to navigate the city. That's when the idea of Electric Wheels was born - a store that not only sells scooters but also sells the idea of efficient, green transportation.</p><br />
            <h2>Meet the Team</h2><br />
            <p>Our team is a group of passionate individuals who eat, sleep, and breathe electric scooters. From engineers who fine-tune every detail for optimal performance to customer service experts who are always here to assist you, we're united by a shared vision of creating a better urban mobility experience.</p><br />
            <div className='team flexCenter innerWidth paddings'>
                 
                {
                    About.map((About)=>(
                    
                        <div className="paddings innerWidth Test-card">
                        <div className="flexCenter card-head">
                            <p className='flexCenter'>{About.cmnt}</p>
                        </div>
                        <div className="flexCenter card-body">
                            <div className="ceo-img-container">
                            <img src={About.image} alt="s" className='ceo-img-circle' />
                            </div>
                            <div className="Aceo-id">
                            <span>{About.name}</span><br/>
                            <span className='secondaryText'>{About.ocupation}</span>
                            </div>
                        </div>
                        </div>
                    
                    ))
                }
            </div>
            <h2>Scooter Excellence</h2><br />
            <p>Our electric scooters are more than just machines; they're the embodiment of our commitment to excellence. Each scooter is meticulously crafted using premium materials, advanced engineering, and a deep understanding of what modern commuters need. From long battery life to intuitive controls, every feature is designed to make your ride smooth and enjoyable.</p><br />
           
        </div>
       
        <div className="flexCenter">
            <a className='Bu' href="/Products">
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
                    className='button B'
                    >Buy Now
                    </motion.button>
                    </a></div>
        
        
        

    </div>

   </section>
  )
}

export default AboutUs

