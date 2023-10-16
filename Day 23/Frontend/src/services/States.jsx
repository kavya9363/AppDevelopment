import React, { createContext, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';
import api from './axiosInstances';
import API_ENDPOINTS from './axiosEndpoints';

const StatesContext = createContext();

export const States = ({ children }) => {

  const dispatch=useDispatch();

  const[logindata,setLogindata]=useState({ 
    email:"",
    firstname:"",
    lastname:"",
    age:"",
    password:"",
  })


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState(0);
  const [pwderror, setPwderror] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  // Signup
  const SignUp = (uid) => {
    api
      .post(API_ENDPOINTS.SIGNUP, {
      //.post("http://localhost:8181/api/v1/auth/register", {
        uid:uid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        age: age,
        role:'USER',
      })
      .then((res) => {
        
        let err=res.data;
        console.log(res.data);
        if(err==='Sommething went wrong!'){
          toast.error("Account already exists")
        }
        dispatch(login({
          email :email,
          firstname: firstname,
          lastname: lastname,
          age: age
        }))        
      });      
      // Navigation
      // navigate('/home');
    };

    const handleSignin = (e) => {
      setLogindata({ ...logindata, [e.target.uid]: e.target.value })
    }
    
      // SignIn
      const SignIn = (e) => {
        e.preventDefault();
      

        api
           .post(API_ENDPOINTS.LOGIN, { email, password })
          //.post("http://localhost:8181/api/v1/auth/login", { email, password })
          .then((res) => {

            const { token, uid } = res.data;
      
            localStorage.setItem('token', token);
            localStorage.setItem('userId', uid);
      
            console.log(res.data);
      
           
            if (token) {
              setError('');
              toast.success('Login Successful');
      
              dispatch(login({ email }));
      
           
              navigate('/home');
            } else {
              setError('*Invalid Email id or Password');
            }
      
            console.log('Email:', email);
            console.log('password:', password);
          })
          .catch((error) => {
            setError('*An error occurred while logging in');
          });
      };

    //password
    const validatePassword = (password) => {
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    
      if (password.length < minLength) {
        return false;
      }
    
      if (!uppercaseRegex.test(password)) {
        return false;
      }
    
      if (!specialCharRegex.test(password)) {
        return false;
      }
    
      return true;
    };
    
    const pwdmatch = (e) => {
      e.preventDefault(e);
      if (validatePassword(password)&&password === confirmPassword) {
        SignUp();
        toast.success('Account Successfully Created');
      } else if (!((password === confirmPassword))) {
        
        toast.error('Please enter the same password');
      }else if(!(validatePassword(password)))
      {
        setPwderror('*Make sure that there are 8 characters, 1 uppercase letter, 1 speacial character')
      }
    };

  //Navigation
  const gotoLogin = () => {
    navigate('/login');
  };

  const gotoHomePage = () => {
    navigate('/home');
  };



  return (
    <div>
      <Toaster />
      <StatesContext.Provider
        value={{
          firstname,
          setFirstname,
          lastname,
          setLastname,
          email,
          setEmail, // You are trying to destructure setEmail here
          password,
          setPassword, // You are trying to destructure setPassword here
          confirmPassword,
          setConfirmPassword,
          age,
          setAge,
          SignUp,
          navigate,
          gotoLogin,
          gotoHomePage,
          pwdmatch,
          pwderror,
          setPwderror,
          error,
          setError,
          SignIn,
          handleSignin,
        }}
      >
        {children}
      </StatesContext.Provider>
    </div>
  );
};



export const useStates = () => useContext(StatesContext);
// export default connect(mapStateToProps, mapDispatchToProps)(States);