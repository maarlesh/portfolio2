import React from 'react';
import './Home.css';
import { saveAs } from "file-saver";
import { Link } from 'react-router-dom';
import linkedin from "./../../images/linkedin.png"
import github from "./../../images/github.png"
import email from "./../../images/email.png"
import download from "./../../images/download.jpg"
const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1er490LTiyIhutlSEwH1uvCjEvfPSYQDj/view?usp=sharing",
      "example.pdf"
    );
  };
const Home = props => {
    return (
        <div className="home-component">
           
            <div className='header-text'>
                <p>HELLO WORLD!<br></br><br></br>I'M SUBAMAARLESHAR B.E CSE,<br></br><br></br>A SOFTWARE DEVELOPER</p>
                <div className='btn-download'>
                   <p><button className="btn-text" onClick={saveFile}alt="download">
                    <img className='btn-img' src={download} alt='download'>
                    </img>                    
                    Download resume</button></p>
                </div>
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