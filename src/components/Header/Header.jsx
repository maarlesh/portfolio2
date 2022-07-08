
import React from 'react';

import "./Header.css"
const Header = ({ heading }) => {
    return (
        <div className='header-container'>
            <p>{heading}</p>
        </div>
    );
};


export default Header;