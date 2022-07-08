import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import home from "./../../images/home.png"
import "./GoHome.css"
class Gohome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    };
    render() {

        return (
            <button className="button">
                 <img className="Image-home" src={home} alt="home" onClick={this.navigateToHome}></img>
            </button>
        );
    }
}


export default withRouter(Gohome);