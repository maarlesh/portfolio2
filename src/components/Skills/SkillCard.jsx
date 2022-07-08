  
import React from 'react';
import './Skills.css';

const SkillCard = ({ skillName, skillUrl }) => {
    return (
        <div className='skill hover04 column'>
            <figure> <img src={skillUrl} alt='skill' /></figure>
           
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;