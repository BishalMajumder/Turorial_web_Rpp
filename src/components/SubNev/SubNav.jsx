import React from 'react';
 import SearchBar from "../SearchBar/SearchBar"
// import Subheader from '../SubHeader/Subheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const Subnavbar = () => {
    return (

<nav className="bg-gray-100 p-4 text-black">
     <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">             
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="w-1/2 text-sm lg:flex-grow">
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
                  Courses
                  </a>
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
                  Tutorials
                   </a>
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
                  Explore
                   </a>
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
                  Practice
                   </a>
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-300 mr-4">
                  Ebook
                   </a>
                  <a href="#" className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-300 mr-4">
                  Success stories
                   </a>
                        
              </div>
              <div className="w-3/4 ">
                 <SearchBar/> 
             </div>
                    
          </div>
      </div>
  </nav>
    );
};

export default Subnavbar;








