import React from 'react';
import './Projects.css';
import github from './../../images/github.png';


const ProjectCard = ({
    projectName,
    projectDescription,
    codeURl
}) => {
    return (
        <div className='project-card'>
            <div className='project-details-container'>
                <p className='project-heading'>{projectName}</p>
                <p className='project-details'>{projectDescription}</p>
                <div className='infos'>
                    <div className='twologo'>
                        <div className='logos-div'>
                            
                            <a href={codeURl}>
                            <img id="codelogo" src={github} alt="youtube"></img>
                            </a>
                        </div>

                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default ProjectCard;