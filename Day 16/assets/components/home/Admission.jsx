import React, { Fragment } from 'react'
import '../../css/home-style.css'
import { useNavigate } from 'react-router-dom'

function Admission() {

  const navigate=useNavigate();
  const gotoAdmissionHome=()=>{
    navigate("/admissionhome")
  }

  return (
    <div>
        
{/* Admissions */}
<section className="admissions" id='admissions'>
          <div className="title">
            <p className="admission-title">Admissions</p>
          </div>
          <span className='line'/>
          <div className="content">
            <p className="admission-title">Click below to know more about admissons</p>
          </div>
          <div className="admission-route">
            <button className='admission-btn' onClick={gotoAdmissionHome}>Learn More</button>
          </div>
        </section>  
    </div>
  )
}

export default Admission