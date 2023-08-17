import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-wrapper'>
        <div className=" paddings innerWidth title">
        <span className='primaryText flexCenter title'>Contact</span><br />
        </div>
        <div className="innerWidth  paddings contact-container">
            
            <div className="inputs-container">
            <input className='input inp' type="text" placeholder='  Name' /><br />
            <input className='input inp' type="email" placeholder='  Email' /> <br />
            <input className='input inp' type="tel" placeholder='  phone Number' /><br />
            <div className='tx-container'>
            <textarea className='input tx' rows={4} cols={50} type="ereatext"  placeholder='  Message'/> <br />
            <input  type="checkbox" className='checked-policie'/> <span>By checking this box and submitting this form,<br /> I consent to my personal information being used to contact me again as part of <br /> my request specified in this form. There is no other processing of my data.</span><br />
        
            </div>
                <input type="button" value="Send" className='button Send' />

            </div>
        </div>

    </section>
  )
}

export default Contact