import React, { Fragment } from 'react'
import '../../css/home-style.css'

function Faq() {
  return (
    <div>
      {/* FAQ */}
      <section className='faq' id='faq'>
          <div className="title">
            <p className='faq-title'>Frequently Asked Questions</p>
          </div>
          <span className='line'/>
          <div className="content">
            <p className="content">These are some most frequently asked questions</p>
          </div>
          <div className="questions">
              <div className="qna">
                <div className="q">
                <h6 className="q">What is the age requirement for admission to kindergarten?</h6>
                </div>
                <div className="a">
                  <p className="a">The age requirement for kindergarten admission is typically 5 years old by September 1st.</p>
                  </div>                
                </div>
              <div className="qna">
                <div className="q">
                  <h6 className="q">Is there a dress code for students?</h6>
                </div>
                <div className="a">
                  <p className="a">Yes, we have a dress code policy that outlines acceptable attire, which usually includes uniforms or specific guidelines.</p>
                </div>              
              
              </div>
              <div className="qna">
                <div className="q">
                  <h6 className="q">Are there any admission tests or assessments?</h6>
                </div>
                <div className="a">
                  <p className="a">Yes, some grade levels may require standardized tests or interviews as part of the admission process.</p>
                </div>                
              </div>            
              <div className="qna">
                <div className="q">
                  <h6 className="q">Is financial aid or scholarships available?</h6>
                </div>                
                <div className="a">
                  <p className="a">Yes, we offer various financial aid options and scholarships based on eligibility and need.</p>
                </div>                
              </div>
              <div className="qna">  
                <div className="q">
                  <h6 className="q">Can parents get involved in school activities?</h6>
                </div>              
                <div className="a">
                  <p className="a">Absolutely, parents are encouraged to participate in PTA/PTO meetings, volunteer opportunities, and school events to support their child's education.</p>
                </div>                
              </div>
              <div className="qna"> 
                <div className="q">
                  <h6 className="q">What documents are required for admission?</h6>
                </div>               
                <div className="a">
                <p className="a">Typically, you'll need to provide your child's birth certificate, immunization records, proof of residence, and any previous school transcripts.</p>
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Faq
