import React from "react";
import { Link } from "react-scroll";
import './intro.css';


import User from '../../assets/User.png';
import briefcase from '../../assets/briefcase.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Charan</span> <br/> Website Designer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br/> visually appealing and user-friendly websites </p>
                <Link><button className="hireBtn"><img src={briefcase} alt="briefcase" /> Hire Me</button></Link>
            </div>
            <img src={User} alt="User Image" className="userImage"/>
        </section>
    )
}

export default Intro;