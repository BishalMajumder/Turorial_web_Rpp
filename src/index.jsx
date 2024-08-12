import React from 'react';
 import './tailwind.css';
 import './index.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import LogIn from './components/LogIn/LogIn.jsx'

import ReactDOM from 'react-dom/client';
import 'react-toastify/ReactToastify.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signUp' element={<SignUp />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route 
      // loader={githubInfoLoader}
      // path='github' 
      // element={<Github />}
       />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
