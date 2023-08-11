import React from 'react'
import './Colors.css'
import colors from '../assets/Colors.png'
import B from '../assets/1.png'
import G from '../assets/2.png'
import R from '../assets/3.png'
import Bl from '../assets/4.png'

const Colors = () => {
  return (
    <section className="Colors-wrapper">
        <div className=" paddings innerWidth title">
            <span className='flexCenter primaryText'>Colors</span><br />
            <span className='flexCenter secondaryText'>Check Out Our Products Colors.</span>
        </div>
        
        <div className="backgroun-container">
        <img src={colors} className='background-image' alt="" />

        </div>
        <div className="paddings colors-container">
            <img className='color-image' src={B} alt="" />
            <img className='color-image' src={G} alt="" />
            <img className='color-image' src={R} alt="" />
            <img className='color-image' src={Bl} alt="" />
        </div>
      
      
    </section>
  )
}

export default Colors