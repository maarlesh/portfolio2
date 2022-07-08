import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {Link , withRouter} from 'react-router-dom';
import './NavBar.css';
import im from "./../../images/A-logo.png"

 class NavBar extends Component {
    render() {
        const { location } = this.props;
        console.log(location);
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass =
            location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass =
            location.pathname === '/skills' ? 'active-item' : '';
        const contactClass =
            location.pathname === '/contact' ? 'active-item' : '';
        return (
            <Menu >
                <img className="Image" src={im} alt="logo"></img>
                <Link id="about" className={`menu-item ${aboutClass}`} to="/about">ABOUT</Link>
                <Link id="skills" className={`menu-item ${skillsClass}`} to="/skills">SKILLS</Link>
                <Link id="projects" className={`menu-item ${projectsClass}`} to="/projects">PROJECTS</Link>
                <Link id="contact" className={`menu-item ${contactClass}`} to="/contact">CONTACT</Link>
            </Menu>
        );
    }
}

export default withRouter(NavBar);