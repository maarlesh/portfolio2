import React from 'react';
import Header from '../Header/Header';
import { skillList } from './../../images/skillList';
import './Skills.css';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='content'>
            <Header
                heading='My Skills.'
            />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>
        </div>
    );
};

export default Skills;