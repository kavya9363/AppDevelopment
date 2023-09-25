import '../../assets/css/adminlogin.css';
import { Link, useNavigate, } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { color } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { login } from '../../services/redux/adminSlice';

const AdminLogin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  
  const[admindata,setAdmindata]=useState({
    username:"",
    pass:"",
  })
  //admin login

  const adminLogin=()=>{
    

    navigate("/admindashboard")
  }

  const gotodashboard=()=>{
    navigate("/home")
  }
  // setLogindata({ ...logindata, [e.target.sid]: e.target.value })
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleAdminlogin = (e) => {
    setAdmindata({ ...admindata, [e.target.aid]: e.target.value })
  }



  const handleSubmit = (e) => {

    // console.log(admindata.username,admindata.password)

    // e.preventDefault;
    dispatch(login({
      username :username
    }))
    // .then((res)=>{
    //   if(username==="mridu" && pass==="123"){
    //     navigate('/dashboard')
    // }else if(username==="hari" && pass==="abc"){
    //     navigate('/dashboard')
    // }else if(username==="neha" && pass==="xyz"){
    //     navigate('/dashboard')
    // }
    // else{
    //     setError("*Give the right username or password")
    // }

    // })
    navigate('/admindashboard');

  };
  return (
    <div>
      <div className="formm">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
            <p style={{color:"red"}}>{error}</p>
        <input
            type="text"
            name='username'
            // value={admindata.username}
            placeholder='Username'
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            name='pass'
            placeholder='Password'
            // value={admindata.pass}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className='btnnn' onClick={handleSubmit}>Log in</button>
        </form>
      </div>
    </div>

  )
}

export default AdminLogin
