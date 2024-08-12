// // import React from 'react';
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// // import { handleError, handleSuccess } from '../../utils';
// import axios from 'axios';
// const SignUp = () => {
//   const [name,setName] = useState()
//   const [email,setEmail] = useState()
//   const [password,setPassword] = useState()
//   const navigate=useNavigate()
   



// const handleSignup =  (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/register',{name,email,password})
//     .then(result=>{console.log(result)
//       navigate('/LogIn')
//     })

//     .catch(err=>console.log(err))
   
// }
// // const handleSignup = async (e) => {
// //     e.preventDefault();
// //     const { name, email, password } = signupInfo;
// //     if (!name || !email || !password) {
// //         return handleError('name, email and password are required')
// //     }
// //     try {
// //         const url = `https://localhost:8080/auth/signup`;
// //         const response = await fetch(url, {
// //             method: "POST",
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(signupInfo)
// //         });
// //         const result = await response.json();
// //         const { success, message, error } = result;
// //         if (success) {
// //             handleSuccess(message);
// //             setTimeout(() => {
// //                 navigate('/login')
// //             }, 1000)
// //         } else if (error) {
// //             const details = error?.details[0].message;
// //             handleError(details);
// //         } else if (!success) {
// //             handleError(message);
// //         }
// //         console.log(result);
// //     } catch (err) {
// //         handleError(err);
// //     }
// // }
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl font-bold text-center">Sign Up</h1>
//         <form className="space-y-4" onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
//             <input  onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"  placeholder='Enter your name...'  />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//             <input   onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your email...'  />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//             <input  onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your password...' />
//           </div>
//           {/* <div className="form-group">
//             <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
//             <input type="password" id="confirm-password" name="confirm-password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
//           </div> */}
//           <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
//             Sign Up
//           </button>
//           <span>Already have an account ?
//                     <Link to="/login">Login</Link>
//                 </span>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// }

// export default SignUp;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import axios from 'axios';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/register', { name, email, password })
//     // navigate('/LogIn')
//     .then((result)=>{console.log(result,"from commited"); 

//       // navigate('/login')
//     })
//      .catch((err)=>{console.log(err,"error") 
//        navigate('/login')  });
//       }
  

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl font-bold text-center">Sign Up</h1>
//         <form className="space-y-4" onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
//             <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your name...' />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//             <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your email...' />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//             <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder='Enter your password...' />
//           </div>
//           <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
//             Sign Up
//           </button>
//         </form>
//           <span>Already have an account? <Link to="/LogIn">Login</Link></span>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/register', { name, email, password })
      .then((response) => {
        // If you want to show a toast message
        // toast.success("Signup successful!");
        console.log('Signup successful:', response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        // Optionally handle error by showing a message
        // toast.error("Signup failed. Try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Enter your name...'
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Enter your email...'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Enter your password...'
            />
          </div>
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            Sign Up
          </button>
        </form>
        <span>Already have an account? <Link to="/login">Login</Link></span>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default SignUp;
