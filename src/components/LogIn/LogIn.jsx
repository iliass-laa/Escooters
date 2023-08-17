import React from 'react'
import './Login.css' 

const LogIn = () => {
  return (
    <section className="LogIn-wrapper">
    <div className="LogIn-container innerWidth paddings">
        <div className="title">
            <span className="primaryText flexCenter">Log In</span>
        </div>
        <div className="inputs-container">
        <input className='inp' type="email" placeholder='  Enter your Email' /> <br />
        <input className='inp' type="password" placeholder='  Enter Your PassWord' /><br />
        <a href="/forgetPassword">Forget your PassWord ?</a> <br />
        <input type="button" value="Log In" className='button' /><br />
        <a href="/SignUp">Sign Up</a> <br />
        </div>
    </div>
   </section>
  )
}

export default LogIn