import React from 'react';
// import { NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import LogoIT from "../images/LogoIT.png";
import NavabrStyle from '../inc/NavbarStyle.css';

function Navbar(){
    return(
                
        <nav className="navbar navbar-light navbar-expand-xl bg-white" id="nav1">
            <div className="container" id="logoId">
                <div className="phase1Logo">
                <Link to="/" > <img src={LogoIT} alt="INTUITIVE IT Solution" /> </Link>
                <Link to="/" className="navbar-brand "> <span>Intuitive IT Solutions</span> </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">        
                        <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link to="/user" className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/location" className="nav-link">Location</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link ">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/offerings" className="nav-link ">Offerings</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/blog" className="nav-link disabled">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
      
    );
}

export default Navbar;