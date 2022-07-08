import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import linkedin from "./../../images/linkedin.png"
import github from "./../../images/github.png"
const Home = props => {
    return (
        <div className="home-component">
           
            <div className='header-text'>
                <p>HELLO WORLD!<br></br><br></br>I'M SUBAMAARLESHAR,</p>
                <p id="tag"> A SOFTWARE DEVELOPER</p>
            </div>
            <div className='head-btns'>
                    <Link to='/contact' className='btn'>
                        <p className='btn-text'>Contact Me!</p>
                    </Link>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/subamaarleshar-b-31224b190/"><img  className="Image-linkedin" src={linkedin} alt="linkedin"></img></a>
                <a href="https://github.com/maarlesh"><img className="Image-github" src={github} alt="github"></img></a>
                
            </div>
        </div>
    );
};

export default Home;