import React, { Fragment } from 'react'
import '../../css/home-style.css'
import { Animator, FadeIn, ScrollPage, Sticky, batch } from 'react-scroll-motion'

function HomeElement() {
  return (
    <div>
      <section style={{ height: "600px" }} className='banner1'>
          <div className="banner1-content">
            <div className="banner-title">
              <h1>Best School Admission App</h1>
            </div>
            <div className="banner-text">
              <p>Make the process of admissions simple with
                <br/>
               the user side and the admin side</p>
            </div>
            <div className="banner-install">
              <div className="playstore">
                {/* <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695441561/playstore_kqczom.png" className='playstore'/> */}
              </div>
              <div className="appstore">
                {/* <img src='https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695441562/appstore_lwk3uo.png' className='appstore'/> */}
              </div>
            </div>
          </div>
          <div className="banner1-image">
            <img src="https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62d513ab00f6516899fd3a0c_web%20design%20vs%20development.png" className='banner-animated-img'/ >
          </div>
          <span className='span-back'>
            
          </span>
        </section>
    </div>
  )
}

export default HomeElement
