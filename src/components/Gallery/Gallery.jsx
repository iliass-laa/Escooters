import React from 'react'
import './Gallery.css'
import Pq from '../assets/partsQuality.png'
import Bq from '../assets/builtQuality.png'
import scooter from '../assets/scooterQuality.png'

const Gallery = () => {
  return (
    <section className="gal-wrapper">
        <div className=" title">
            <span className='flexCenter primaryText'>Gallery</span><br/>
            <span className='flexCenter secondaryText'>View Gallery of our Products and make your self satisfied with our creation.</span>
        </div>
       <div className=" gal-container">
        {/* left Side */}
            <div className="gal-left flexColStart  innerWidth paddings">
                <div className="image-container innerWidth paddings flexColStart">
                    <img src={scooter} alt=""  className='image'/>
                </div>
                <div className="box-container paddings inneWidth flexCenter">
                    <span className='flexCenter primaryText'>Battery Images</span>
                 </div>
                 <br/>
                 <div className="box-container paddings inneWidth flexCenter">
                    <span className='flexCenter primaryText'>Spare Parts Images</span>
                 </div>
                 <br/>
                 <div className="box-container paddings inneWidth flexCenter">
                    <span className='flexCenter primaryText'>Charging Cable Images</span>
                 </div>

            </div>
            {/* right Side         */}
            <div className="gal-right innerWidth ">
                <div className="images-container">
                    <img src={Bq} alt="" className='image'/>
                    <img src={Pq} alt=""  className='image'/>
                </div>
                
            </div>      
        
        </div>

    </section>
  )
}

export default Gallery