import Lottie from 'lottie-react';
import animationData from '../assets/day-night.json'
import animationData2 from '../assets/loogoo-animation.json'
import './Footer.css'


function Banner(){
    return (<div className='container'>
        <h1>You want a Night Mode or a Day mode ?</h1>
        <Lottie className='animation' animationData={animationData}/>
        <Lottie className='animation' animationData={animationData2}></Lottie>
    </div>);

}
export default Banner;