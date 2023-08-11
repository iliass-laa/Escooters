import React from 'react'
import  './Motor.css'
import pic from "../assets/FOF.png"

const Motor = () => {
  return (
    <section className="Motor-wrapper">
        <div className="title">
        <span className='flexCenter primaryText'>Heigh Efficiency Motor</span><br/>
            <span className='flexCenter secondaryText'>More troque for powerful riding with 22% maximun hill climbing capacity .</span>
        </div>
        <div className="flexCenter image-container">
            <img src={pic} alt="" />

        </div>
    </section>
  )
}

export default Motor

