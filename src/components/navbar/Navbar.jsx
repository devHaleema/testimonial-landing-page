import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import vasitilogo from "./asset/vasitilogo.jpg";
import "./navbar.css";

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <div><img src={vasitilogo} className="img-logo" alt="Logo"/></div>
            <ul 
            className={isMobile ? "nav-link-mobile" : "nav-link"}
            onClick={() => setIsMobile(false)}>
                <Link to="/about" className="about"><li>ABOUT US</li></Link>
                <Link to="/stories" className="stories"><li>STORIES</li></Link>
                <Link to="/contact" className="contact"><li>CONTACT</li></Link>
                <Link to="/login" className="login"><li>LOG IN</li></Link>
                <Link to="signup" className="signup"><li> SIGN UP</li></Link>
            </ul>
           <button 
           className="mobile-menu-icon"
           onClick={() => setIsMobile(!isMobile)} >
               {isMobile ? (<CancelIcon />) : (<MenuIcon />)}
           </button>
           
           
        </nav>
    );
};

export default Navbar;
