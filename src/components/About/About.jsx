import React from 'react';
import Header from '../Header/Header';

import about from "./../../images/profile.jpg"
import "./About.css"
const About = props => {
    return (
        <div className="content ">
            
            <div className='neonText'>
                <Header
                    heading='About'
                />
            </div>
            <div className="about-content">
                <div className="about-left">
                    I’m a Web Developer from India.<br></br>
                    Im an enthusiastic quick learner who has great passion towards software development.
                    Due to my passion for development, I have always strived to learn more by teaching myself
                    from the resources present online.
                    <br></br>
                    <br></br>
                    My ambition is to be a good human.
                </div>
                <div className="about-right">
                <img className="Image-about" src={about} alt="about"></img>
                </div>
                
            </div>
        </div>
    );
};

export default About;