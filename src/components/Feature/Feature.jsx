import React from 'react'
import './Feature.css'


import data from '../../utils/data.json'


const Cards =({number , unit,title}) =>{
  return (
    <div className="Feature-card">
      <div className="flexCenter card-head">
      <h2>{number}</h2>
      <span>{unit}</span>
      </div>
     
      <span className='flexCenter secondaryText'>{title}</span>
    </div>
  )
}
const Feature = () => {
  return (
    <section className="Feature-wrapper">
      <div className="flexCenter innerWidth paddings Feature-container">
       {data.map((cardData,index)=>(
        <Cards key={index} {...cardData}/>

       ))

       }

      </div>
    </section>

    )
}

export default Feature