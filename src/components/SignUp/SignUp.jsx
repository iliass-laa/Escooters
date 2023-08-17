import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <section className="SignUp-wrapper">
        <div className="SignUp-container">
            <div className="title flexCenter paddings">
                <span className="primaryText flexCenter"> SIGN UP</span>
            </div>
            <div className="inputs-container">
       
        <input className='inp' type="text" placeholder='  Enter Your Name' /><br />
        <input className='inp' type="email" placeholder='  Enter your Email' /> <br />
        <input className='inp' type="password" placeholder='  Enter Your PassWord' /><br />
        <input  className='inp'type="password" placeholder='  Confirm Your PassWord' /><br />
        <input type="button" value="Sign Up" className='button' /><br />
        </div>
        </div>

    </section>
  )
}

export default SignUp