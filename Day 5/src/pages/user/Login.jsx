import React, { useState } from 'react';
import '../../assets/css/Login.css';
import {GoogleCircleFilled, AppleFilled, FacebookFilled,GithubFilled} from '@ant-design/icons'
import { useStates } from '../../services/States';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';


const Login=() => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
 const toggleSignUpMode = () => {
    setSignUpMode(!signUpMode);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const validateEmail = (input) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|example\.com|domain\.edu|domain\.in|domain\.co\.in)$/i;

    return emailRegex.test(input);
  };

  
  // const navigate=useNavigate()
  const {
    setEmail,
    setFirstname,
    setPwd,
    setLastname,
    setConfirmpwd,
    setAge,
    pwdmatch,
    error,
    pwderror,
    handleSignin,
    logindata,
    SignUpDetails,
    SignIn,
  } = useStates();
  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };
  
  // const gotoHomePage=()=>{
  //   navigate("/home")
  // }

  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}` }>
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-in-form ${signUpMode ? '' : 'active'}`} onSubmit={SignIn}>
            <h2 className="title">Sign in</h2>
            <p className='error-message'>{error}</p>
            <div className="input-field">
              <input type="text" 
              placeholder="Email" 
              name="email" 
              // value={logindata.email}
              onChange={(e)=>setEmail(e.target.value)}
              // onChange={handleSignin}
              />
            </div>  

            <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password"
              name="pwd"
              // value={logindata.pwd}
              onChange={(e) => setPwd(e.target.value)}
              // onChange={handleSignin}
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <EyeInvisibleOutlined className='eye-icon'/> : <EyeOutlined className='eye-icon'/>}
            </span>
            </div>

            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            {/* Social media icons */}
            <div className='social-icons'>
            <GoogleCircleFilled className='google'/>
            <AppleFilled className='apple'/>
            <FacebookFilled className='facebook'/>
            <GithubFilled className='github'/>
            </div>
          </form>

          <form action="#" className={`sign-up-form ${signUpMode ? 'active' : ''}`} onSubmit={pwdmatch}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <input type="text" 
              placeholder="First Name" 
              name='firstname'
              onChange={(e)=>setFirstname(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input type="text" 
              placeholder="Last Name" 
              name='lastname'
              onChange={(e)=>setLastname(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input type="email" 
              placeholder="Email" 
              name='email'
              onChange={handleChange}
              style={{ borderColor: isValid ? 'initial' : 'red' }}
              />
               {!isValid && <p style={{ color: 'red' }} className='email-style'>Invalid email address</p>}
            </div>
            <p className='error-message1'>{pwderror}</p>
           
            <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              placeholder="Password"
              name="pwd"
              onChange={(e) => setPwd(e.target.value)}
            />
            <span onClick={togglePasswordVisibility} className='span-size' >
              {showPassword ? <EyeInvisibleOutlined  className='eye-icon'/> : <EyeOutlined  className='eye-icon'/>}
            </span>
            </div>

            <div className="input-field">
              <input type="password" 
              placeholder="Confirm Password" 
              name='confirmpwd'
              onChange={(e)=>setConfirmpwd(e.target.value)}
              />
            </div>

            <div className="input-field">
              <input type="text" 
              placeholder="Age" 
              name='age'
              onChange={(e)=>setAge(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Sign up"/>
            <p className="social-text">Or Sign up with social platforms</p>
            {/* Social media icons */}
            <div className='social-icons'>
            <GoogleCircleFilled className='google'/>
            <AppleFilled className='apple'/>
            <FacebookFilled className='facebook'/>
            <GithubFilled className='github'/>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome! Make admission procedure easy with our website, proceed to create an account
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign In to view our webApp
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;