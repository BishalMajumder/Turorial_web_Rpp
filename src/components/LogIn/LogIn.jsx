import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
// import { handleError, handleSuccess } from '../../utils';
 const Login = () => {

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/Login', {  email, password })
    navigate('/')

    .then(result=>{
      console.log(result)
      if(result.data==='success')
      {

      }
      })
      
          .catch(err=>console.log(err))
        }       

//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
// })

// const navigate = useNavigate();

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     const copyLoginInfo = { ...loginInfo };
//     copyLoginInfo[name] = value;
//     setLoginInfo(copyLoginInfo);
// }

// const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;
//     if (!email || !password) {
//         return handleError('email and password are required')
//     }
//     try {
//         const url = `https://localhost:8080/auth/login`;
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(loginInfo)
//         });
//         const result = await response.json();
//         const { success, message, jwtToken, name, error } = result;
//         if (success) {
//             handleSuccess(message);
//             localStorage.setItem('token', jwtToken);
//             localStorage.setItem('loggedInUser', name);
//             setTimeout(() => {
//                 navigate('/home')
//             }, 1000)
//         } else if (error) {
//             const details = error?.details[0].message;
//             handleError(details);
//         } else if (!success) {
//             handleError(message);
//         }
//         console.log(result);
//     } catch (err) {
//         handleError(err);
//     }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center">Log In</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          
          <div className="form-group">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input onChange={(e) => setEmail(e.target.value)}  type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your email...'  />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input onChange={(e) => setPassword(e.target.value)}  type="password" id="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your password...' />
          </div>
          
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
         Log in
          </button>
          <span>Does't have an account ?
                    <Link to="/signup">Signup</Link>
                </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
