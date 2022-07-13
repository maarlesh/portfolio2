import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import linkedin from "./../../images/linkedin.png"
import github from "./../../images/github.png"
import email from "./../../images/email.png"
const Home = props => {
    return (
        <div className="home-component">
           
            <div className='header-text neonText'>
                <p>HELLO WORLD!<br></br><br></br>I'M SUBAMAARLESHAR B.E CSE,<br></br><br></br>A SOFTWARE DEVELOPER</p>
                <p></p>
            </div>
            <div className="social ">
                <div className='img1'><a href="https://www.linkedin.com/in/subamaarleshar-b-31224b190/"><img  className="Image-linkedin" src={linkedin} alt="linkedin"></img></a></div>
                <div className='img1'><a href="https://github.com/maarlesh"><img className="Image-github" src={github} alt="github"></img></a></div>
            </div>
            <div className='social'>
                    <Link to='/contact'>
                        <img src={email}  className = 'img2' width = '100' alt="github"></img>
                    </Link>
            </div>
        </div>
    );
};

export default Home;