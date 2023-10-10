import React from 'react';
import Header from '../Header/Header';
import { projectsData } from './../../images/ProjectData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='content'>
            <div className='heading'>
            <Header
                heading='My Projects.'
            
            />
            </div>
            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                
                        codeURl
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                              
                                codeURl={ codeURl}
                            />
                        );
                    }
                )}
            </div>
            
        </div>
    );
};

export default Projects;