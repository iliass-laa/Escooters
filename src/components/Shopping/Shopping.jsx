import React from 'react'
import './Shopping.css'
import AS from '../assets/shoppingRack.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Shopping = () => {
  return ( <section className="Shop-wrapper">
  <div className="title">
  <span className='flexCenter primaryText'> Multiple Accesoires</span><br/>
  <span className='flexCenter secondaryText'>There are multipleùodes for the scooter for your multiple needs.</span>
  </div>
  <div className="flexCenter Shop-container">
    {/* left */}
        <div className="flexColStart Shop-left">
            <div className="image-container">
            <img src={AS} alt="" />
            </div>
        </div>
    {/* right */}
      
      <div className=" innerWidth Shop-right">
            <span className='flexCenter primaryText'>Shopping Rack</span><br/>
            <div className="Info">
            <div className="cel-info"> <FontAwesomeIcon icon={faCheckCircle} />  <span> Material : aliminium alloy</span><br/></div> 
            <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Color : black</span><br/></div> 
            <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Capacity : 45lbs</span><br/></div> 
            <div className="cel-info"><FontAwesomeIcon icon={faCheckCircle} />  <span> Ease : Steady & adjustable</span><br/></div> 
            </div>
        </div>
  </div>
  <div className="box1-container paddings inneWidth flexCenter">
                <span className='flexCenter primaryText'>MoreAccesoir coming soon</span>
        </div>
</section>
  )
}

export default Shopping