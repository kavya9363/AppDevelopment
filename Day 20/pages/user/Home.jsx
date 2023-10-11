import React, { Fragment } from 'react'
import Navbar from '../../assets/components/NavBar'
import '../../assets/css/home-style.css';
import HomeElement from '../../assets/components/home/HomeElement';
import Admission from '../../assets/components/home/Admission';
import Testimonial from '../../assets/components/home/Testimonial';
import Faq from '../../assets/components/home/Faq';
import About from '../../assets/components/home/About';
import ContactUs from '../../assets/components/home/ContactUs';
import Footer from '../../assets/components/home/Footer';
import { ScrollContainer } from 'react-scroll-motion';

function Home() {
  return (
    <div className='back-color'>
      <Navbar />
      <HomeElement/>
      <Admission/> 
      <Testimonial/>
      <Faq/>
      <About/>
      <ContactUs/>
      <Footer/> 
    </div>
  )
};

export default Home


