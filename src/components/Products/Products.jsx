import React, { useState } from 'react';
import './Products.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import green from '../../components/assets/green.png';
import blue from '../../components/assets/Blue.png';
import red from '../../components/assets/RED.png';
import black from '../../components/assets/black.png';
import white from '../../components/assets/white.jpg';
import { motion } from 'framer-motion';

const Product = () => {
    const Images = [blue, green, red, black ,white];
    const [currentImg, setCurrentImg] = useState(0);
    const [imgSrc, setImgSrc] = useState(null);


    const handlerPrev = () => {
        setCurrentImg((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
        setImgSrc(null);
    };
    const handleNext = () => {
        setCurrentImg((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
        setImgSrc(null); 
    };
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    };
    
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    
    const handleImgChanger = (newSrc) => {
        setImgSrc(newSrc);
    };
    
    return (
        <section className="Product-wrapper">
            <div className="Product-container flexCenter innerWidth paddings">
                {/* leftSide */}
                <div className="left-Product flexCenter">
                    <button onClick={handlerPrev} className='button nav left'><FaChevronLeft /> </button>
                    <div className="image_P-container">
                        <img src={ imgSrc ||  Images[currentImg] } alt="" className='image_P' />
                    </div>
                    <button onClick={handleNext} className='button nav right'><FaChevronRight /></button>
                </div>
                <div className="right-Product flexColStart">
                    <div className="title flexCenter innerWidth paddings">
                        <span className='primaryText T'>E-Scooter</span>
                    </div>
                    {/* Right Side */}
                    <div className="right-container">
                        <span className='price'>€1555,99</span> <span className='price2'> €3199,99</span><br />
                        <span className='secondaryText t'>Colors :</span>
                        <div className="colors-name">
                            <button className='l-colors button B' onClick={() => handleImgChanger(black)} htmlFor="">Black</button>
                            <button className='l-colors button W' onClick={() => handleImgChanger(white)} htmlFor="">White</button>
                            <button className='l-colors button R' onClick={() => handleImgChanger(red)} htmlFor="">Red</button>
                            <button className='l-colors button G' onClick={() => handleImgChanger(green)} htmlFor="">Green</button>
                            <button className='l-colors button Bl' onClick={() => handleImgChanger(blue)} htmlFor="">Blue</button>
                        </div>
                        <div className="line"></div><br />
                        <span className='secondaryText t'>Quantity</span><br />
                        <div className="Quantity">
                            <button className='button P' onClick={handleDecrement}><span>-</span></button>
                            <label className='count' htmlFor="">{count}</label>
                            <button className='button P' onClick={handleIncrement}><span>+</span></button>
                            <a href="/ChekOut">
                                <motion.button
                                    initial={{ opacity: 1 }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: '#7FE1CF',
                                        color: 'white',
                                    }}
                                    whileTap={{
                                        scale: 0.5,
                                        backgroundColor: '#7FE1CF',
                                        color: 'white',
                                    }}
                                    className='button h-button BuyNow'
                                >
                                    Buy Now
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;


