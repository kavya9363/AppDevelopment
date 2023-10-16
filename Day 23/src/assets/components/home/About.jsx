import React, { Fragment } from 'react'
import '../../css/home-style.css'
import { HeartFilled, MobileFilled, ThunderboltFilled } from '@ant-design/icons'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlayArrow } from '@mui/icons-material';

function About() {
  return (
    <div>
        <section className='banner2' id='about'>
          <div className="about">
              <p className='title'>About</p>
          </div>
          <span className='line'/>
          <div className="about-content">
              <p className='content'>This page uses React framework of javascript for the Front-End, Springboot for the backend and API used is REST API .</p>
          </div>
          <div className="about-icons">
              <div className="icon-div">
                <div className="icon">
                  <HeartFilled color='#ffffff' className='heart'/>
                </div>
                <div className="icon-title">
                  <p className='icon-title'>Support</p>
                </div>
                <div className="icon-content">
                  <p className="icon-content">Easy support and feedback system</p>
                </div>
              </div>
              <div className="icon-div">
                <div className="icon">
                  <MobileFilled color="#ffffff" className="mobile"/>
                </div>
                <div className="icon-title">
                  <p className='icon-title'>Cross Platform</p>
                </div>
                <div className="icon-content">
                  <p className="icon-content">Can be used in multiple platforms</p>
                </div>
              </div>
              <div className="icon-div">
                <div className="icon">
                  <ThunderboltFilled className='thunder'/>
                </div>
                <div className="icon-title">
                  <p className='icon-title'>Fast</p>
                </div>
                <div className="icon-content">
                  <p className="icon-content">Faster and Smoother</p>
                </div>
              </div>
          </div>
        </section>
        {/* video */}
        <section className="video-section prelative text-center white">
          <div className="section-padding video-overlay">
            <div className="container1">
              <h3>Watch Now</h3>
              <i className="fa fa-play" id="video-icon" aria-hidden="true"><PlayArrow className='play-icon' fontSize='large'/></i>
              
              <div className="video-popup">
                <div className="video-src">
                  <div className="iframe-src">
                    <iframe
                      src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&showinfo=0"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About