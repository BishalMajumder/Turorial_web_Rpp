// import React from 'react'
  import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="container mx-auto flex justify-between items-center">
                    <div className=' w-36  '>

                    <Link to="/" className="flex items-center">
                        <img
                            src="./image3/logo.png"
                            className="mr-3 h-12 w-20 rounded-2xl"
                            alt="Logo"
                        />
                    </Link>
                    </div>
                    
                    <div className={`md:static absolute w-2/4 md:min-h-fit min-h-[60vh] left-0 ${!menuOpen ? 'top-[-600%]' : 'top-[100%]'}  w-auto w-full flex items-center px-5 transition-all duration-300`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4 w-full md:w-auto">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                     <FontAwesomeIcon icon={faHome} className="mr-2" />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Contact Us
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2 w-1/4">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4 w-full md:w-auto">
                            <li>

                                <NavLink
                                    to="/LogIn"
                                    className={({isActive}) =>`text-gray-800   hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
                                }
                                >
                                    Log in
                                </NavLink>
                            </li>
                            <li>

                                <NavLink
                                    to="/SignUp"
                                     className={({isActive}) =>`text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
                                }
                                >
                                    Sign Up
                                </NavLink>
                                    <FontAwesomeIcon onClick={onToggleMenu} className="cursor-pointer md:hidden" icon={menuOpen ? faTimes:faBars } />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

