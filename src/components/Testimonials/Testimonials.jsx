import React from 'react'
import './Testimonials.css'
import "swiper/css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {Test} from '../../utils/Test.js'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import {sliderSettings} from '../../utils/commons'



const Testimonials = () => {
  const starCount = 5;
  // Create an array with the length equal to starCount
  const stars = Array.from({ length: starCount }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="yellowStar" /> ));
  return (
      <section className="Test-wrapper">
        <div className="paddings innerWidth Test-container">
            <div className="title">
                <span className="primaryText flexCenter"> Testimonial</span>
            </div>
          <Swiper {...sliderSettings}>
          <SliderButtons/>
            {
              Test.map((Test,i)=>(
                <SwiperSlide key={i}>
                  <div className="paddings innerWidth Test-card">
                    <div className="flexCenter card-head">
                      {stars}
                      <br/>
                      <p className='flexCenter'>{Test.cmnt}</p>
                    </div>
                    <div className="flexCenter card-body">
                      <div className="ceo-img-container">
                        <img src={Test.image} alt="s" className='ceo-img-circle' />
                      </div>
                      <div className="ceo-id">
                        <span>{Test.name}</span><br/>
                        <span className='secondaryText'>{Test.ocupation}</span>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
              ))
            }
            
          </Swiper>
        </div>
        
      </section>



  //  <section className="Test-wrapper">
  //   <div className="Test-container flexCenter innerWidth paddings">
  //       <div className="title">
  //           <span className="primaryText flexCenter"> Testimonials
  //               {/* <img src={ceo1} alt="" sizes="" srcset="" /> */}
  //           </span>
  //       </div>
  //       <div className="flexCenter paddings innerWidth card-container">
  //         {
  //           Test.map((test ,index)=>
  //           (<Cards key={index } {...test}/>))
  //         }
  //       </div>
        
  //   </div>
  //   <SliderButtons/>

  //  </section>
  )
}

export default Testimonials


// const Cards =({cmnt , name,ocupation,image}) =>{
//   const starCount = 5;
//   // Create an array with the length equal to starCount
//   const stars = Array.from({ length: starCount }, (_, index) => (
//     <FontAwesomeIcon key={index} icon={faStar} className="yellowStar" />
//   ));
//     return (
//       <Swiper {...sliderSettings}>
      
//       </Swiper>
//     )
//   }
const SliderButtons = ()=>{
  const swiper = useSwiper();
  return(
      <div className="flexCenter paddings r-buttons">
          <button onClick={()=>swiper.slidePrev()}>&lt;</button>
          <button onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
  )
}
