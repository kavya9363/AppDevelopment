import React, { Fragment } from 'react'
import '../../css/home-style.css'
import Email from '../Email'
import ContactCard from '../Contact-card'

function ContactUs() {
  return (
    <div>
      {/* Contact */}

      <section className="contact" id='contact'>
          <div className="title">
            <p className="contact-title">Contact Us</p>
          </div>
          <span className='line'/>
          <div className="content">
            <p className='contact-content'>Ask queries, give your feed back here below</p>
          </div>
          <div className="contact-components">
            <div className="email-form">
              <Email/>
            </div>
            <div className="contact-details">
              <ContactCard/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ContactUs
