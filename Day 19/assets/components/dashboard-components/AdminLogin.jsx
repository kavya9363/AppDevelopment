// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import '../assets/css/AdminLogin.css'
// const AdminLogin = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);
   
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http:/localhost:9090/viewusers");
//       setUsers(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (uid) => {
//     try {
//       const response = await axios.delete(`http:/localhost:9090/dellogin?uid=${uid}`);
//       if (response.data) {
//         // User deleted successfully, update the user list
//         fetchUsers();
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   const handleFormToggle = () => {
//     setIsSignup(!isSignup);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       let response;
//       if (isSignup) {
//         response = await axios.post("http:/localhost:9090/user", {
//           username: username,
//           email: email,
//           pass : pass,
//         });
//       } else {
//         response = await axios.post("http:/localhost:9090/plogin", {
//           email: email,
//           pass : pass,
//         });
//       }
//       if (response.data) {
//         // Signin or Signup successful, redirect to home page
//         window.location.href = "/list";
//       } else {
//         // Signin or Signup failed, display error message
//         setErrorMessage("Signin or Signup failed");
//       }
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   return (
//     <div className="signinup-container1">
//       <div className="signinup-card">
//         <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
//         {errorMessage && <p className="error">{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <div className="form-group">
//               <label htmlFor="name" >Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={username}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           )}
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={pass}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button className="button1" type="submit">
//             {isSignup ? "Sign Up" : "Sign In"}
//           </button>
//         </form>
//         <div className="toggle-link">
//           {isSignup ? (
//             <p>
//               Already have an account?{" "}
//               <span onClick={handleFormToggle}>Sign In</span>
//             </p>
//           ) : (
//             <p>
//               New to Website? <span onClick={handleFormToggle}>Sign Up now</span>
//             </p>
//           )}
//         </div>
//       </div>
//       <div>
//         <div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;