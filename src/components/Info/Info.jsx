import React from 'react'
import './Info.css'
import infoscooter from '../assets/Infoscooter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import {SlCheck} from 'react-icons/io5'

const Info = () => {
  return (
   <section className="Info-wrapper">
    <div className="Info-title">
            <span className='flexCenter primaryText'>Product Information</span><br/>
            <span className='flexCenter secondaryText'>Our Scooters has the following unique Design an technology features</span>
        </div>
    <div className="flexCenter innerWidth paddings Info-container">
        
        <div className="flexColStart Info-left">
            <div className="image-container">
            <img className='imm' src={infoscooter} alt="ds" />
            </div>
        </div>
        <div className="flexCenter Info-right">
         <div className="Info">
           <div className="cel-info"> <FontAwesomeIcon icon={faCheckCircle} />  <span> Light Weight aircraft grade aliminum frame</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Car grade lethium battery</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Self-balenced</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Plug and Play</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Quick release adapter</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span>  RFID key card </span><br/></div> 

         </div>
        </div>
         
    </div>
   </section>
  )
}

export default Info