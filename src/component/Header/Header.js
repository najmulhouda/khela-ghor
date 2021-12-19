import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        
        <nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav  ">
                        <li className="nav-item ">
                        <NavLink to="/home"
                        className='text-decoration-none p-5 mr-5'
                        activestyle={{
                            fontWeight: "bold",
                            color: "red",
                            
                        }}
                        >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/about"
                        className='text-decoration-none p-5 mr-5'
                        activestyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/service"
                        className='text-decoration-none p-5 mr-5'
                        activestyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >Service</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/registration"
                        className='text-decoration-none p-5 mr-5'
                        activestyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >Registration</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
















            
        </nav>
    );
};

export default Header;