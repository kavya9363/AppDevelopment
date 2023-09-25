import React from 'react'
import '../css/Email.css' 

function Email() {
  return (
    <div>
      <form action="" className="email">
        <div className="name-email">
            <div className='input-name'>
                <input id='form-inputt' type="text" className='name' placeholder='Full Name'/>
            </div>
            <div className="input-email">
                <input id='form-inputt' type="text" className="email" placeholder='Email'/>
            </div>
        </div>
        <div className="email-sub">
            <input id='form-inputt' type="text" className="sub" placeholder='Subject'/>
        </div>
        <div className="email-msg">
            <input id='form-inputt' type="text" placeholder='Message' className="msg" />
        </div>
        <div className='email-submit'>
            <button className='submitt'>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default Email