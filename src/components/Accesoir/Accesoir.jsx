import React from 'react'
import './Accesoir.css'
import AS from '../assets/Accesoir.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Accesoir = () => {
  return (
    <section className="Acc-wrapper">
        <div className="title">
        <span className='flexCenter primaryText'> Multiple Accesoires</span><br/>
        <span className='flexCenter secondaryText'>There are multipleùodes for the scooter for your multiple needs.</span>
        </div>
        <div className="flexCenter  innerWidth Acc-container">
            <div className="flexColStart Acc-left">
            <span className='flexCenter primaryText'>Golf Bag Rock</span><br/>
            <div className="Info">
           <div className="cel-info"> <FontAwesomeIcon icon={faCheckCircle} />  <span> Material : aliminium alloy</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Color : black</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Capacity : 45lbs</span><br/></div> 
           <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Ease : Steady & adjustable</span><br/></div> 
           

         </div>
            </div>
            <div className="Acc-right">
            <div className="image-container">
            <img src={AS} alt="" />
             </div>
            </div>
        </div>
        
    </section>
  )
}

export default Accesoir