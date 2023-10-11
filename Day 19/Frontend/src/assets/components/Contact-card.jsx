import React from 'react'
import '../css/contact-card.css'
import { ClockCircleFilled, MailFilled, MobileFilled, PushpinFilled } from '@ant-design/icons'

function ContactCard() {
  return (
    <div className='contact-card'>
      {/* <div className="details">
        <div className="contact-icons">
        <PushpinFilled />
        </div>
        <div className="contact-innercontent">
            <p className="contact-info">ADDRESS<br/>NEW DELHI, INDIA</p>
        </div>
      </div>
      <div className="details">
        <div className="contact-icons">
        <PushpinFilled />
        </div>
        <div className="contact-innercontent">
            <p className="contact-info">ADDRESS<br/>NEW DELHI, INDIA</p>
        </div>
      </div>
      <div className="details"></div>
      <div className="details"></div> */}
      <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="contact-info white">
                  <div className="contact-item media">
                  <PushpinFilled className='contact-icons'/>
                    {/* <i className="fa fa-mobile media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase">Address</p>
                      <p className="text-uppercase">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  <MobileFilled className='contact-icons'/>
                    {/* <i className="fa fa-mobile media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase">Phone</p>
                      <p className="text-uppercase">
                        <a className="text-white" href="tel:+15173977100">
                          009900990099
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  <MailFilled className='contact-icons'/>
                    {/* {" "}
                    <i className="fa fa-envelope media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase">E-mail</p>
                      <p className="text-uppercase">
                        <a
                          className="text-white"
                          href="mailto:abcdefg@gmail.com"
                        >
                          yogeshsingh.now@gmail.com
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  <ClockCircleFilled className='contact-icons'/>
                    {/* {" "}
                    <i className="fa fa-clock media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase">Working Hours</p>
                      <p className="text-uppercase">
                        Mon-Fri 9.00 AM to 5.00PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default ContactCard
