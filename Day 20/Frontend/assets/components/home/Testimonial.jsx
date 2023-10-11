import React, { Fragment } from 'react'
import '../../css/home-style.css'
import Carousel from '../Carousel.jsx'

function Testimonial() {
  return (
    <div>
        {/* Testimonial */}
        <section className="testimonial" id='testimonials'>
          <div className="title">
            <p className='test-title'>Testimonials</p>
          </div>
          <span className='line'/>
          <div className="content">
            <p className='test-content'>Here are some parents, bloggers and student experiences</p>
          </div>
          <div className="carousel">
            <div className="left-arrow">
              <img src='https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695441562/arrow-left_s4cysp.png' className='left'/>
            </div>
            <div className="carousel-card">
              <Carousel className='car'/>
            </div>
            <div className="right-arrow">
              <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695441563/arrow-right_areznh.png" alt="" className="right" />
            </div>
          </div>
        </section>

    </div>
  )
}

export default Testimonial