import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';

const StatesContext = createContext();

export const States = ({ children }) => {

  const dispatch=useDispatch();

  const[logindata,setLogindata]=useState({
    email:"",
    firstname:"",
    lastname:"",
    age:"",
    pwd:"",
  })


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmpwd, setConfirmpwd] = useState('');
  const [age, setAge] = useState(0);
  const [pwderror, setPwderror] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  // Signup
  const SignUp = (sid) => {
    axios
      .post('http://localhost:8080/user', {
        sid:sid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        pwd: pwd,
        confirmpwd: confirmpwd,
        age: age
      })
      .then((res) => {
        console.log(res);
        console.log(email);
        dispatch(login({
          email :email,
          firstname: firstname,
          lastname: lastname,
          age: age
        }))        
      });      
      // Navigation
      navigate('/dashboard');
    };

    const handleSignin = (e) => {
      setLogindata({ ...logindata, [e.target.sid]: e.target.value })
    }
   
      // SignIn
      const SignIn=(e)=>{
        e.preventDefault();
        
        // signInWithEmailAndPassword(auth, email, pwd)
        axios.get(`http://localhost:8080/login`,{
          params:{
            email:email,
            pwd:pwd,
          },
        })
        .then((res)=>{
          let err=res.data;
          console.log(res.data)
          if(err==="Login Successful"){
            setError("")
            toast.success("Login Successful")
            dispatch(login({
              email :email
            }))
            navigate("/dashboard")
          }else{
            setError("*Invalid Email id or Password")
          }
          console.log("Email:",email);
          console.log("password:",pwd)
        })
        // .catch((error) => {
        //   if(error.code==="auth/wrong-password")
        //   toast.error("The password is incorrect. Please enter the correct password");
        //   else if(error.code === "auth/user-not-found")
        //   {
        //     toast.error("Create a new account")
        //     .then((willDelete) => {
        //       if(willDelete){
        //         setEmail("");
        //         console.log(email);
        //         setPwd("");
        //         navigate("/signup")
        //       }
        //     });
        //   }
        //   console.log(error);
        // });
      }

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
      if (validatePassword(pwd)&&pwd === confirmpwd) {
        SignUp();
        toast.success('Account Successfully Created');
      } else if (!((pwd === confirmpwd))) {
        
        toast.error('Please enter the same password');
      }else if(!(validatePassword(pwd)))
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
          setEmail,
          pwd,
          setPwd,
          confirmpwd,
          setConfirmpwd,
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
          // logindata,
          // setLogindata,
          // SignUpDetails,
        }}
      >
        {children}
      </StatesContext.Provider>
    </div>
  );
};



export const useStates = () => useContext(StatesContext);
// export default connect(mapStateToProps, mapDispatchToProps)(States);
