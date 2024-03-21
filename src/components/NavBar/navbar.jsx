import React from "react";


import './navbar.css';
import logo from '../../assets/logo.png';
import send from '../../assets/send.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="dskMenu">
                <Link className="dskMenuListItem">Home</Link>
                <Link className="dskMenuListItem">About</Link>
                <Link className="dskMenuListItem">Portfolio</Link>
                <Link className="dskMenuListItem">Client</Link>
            </div>
            <button className="dskMenuBtn">
                <img src={send} alt="send" className="sendContactImg"/> Contact Me
            </button>
        </nav>
    )
}

export default Navbar