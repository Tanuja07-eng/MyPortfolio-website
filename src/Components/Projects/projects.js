import React from 'react';
import './projects.css';
import { projects } from '../../data/constants';
// import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
// import { Modal } from '@mui/material';
import { useState } from 'react';

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div className='ProjCard' onClick={() => setOpenModal({ state: true, project: project })}>
      {/* <img className='ProImage' src={project.image}/> */}
      <div className='ProjTags'>
        {project.tags?.map((tag, index) => (
          <div className='ProjTag'>{tag}</div>
        ))}
      </div>
      <div className='ProjDetails'>
        <div className='ProjTitle'>{project.title}</div>
        <div className=' ProjDate'>{project.date}</div>
        <div className='ProjDescription'>{project.description}</div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="projects">
      <div className='ProWrapper'>
        <div className='ProTitle'>My Projects</div>
        <div className='ProDesc'>
          I have worked on some web projects. Here are some of my projects.
        </div>
        <div className="ProCardContainer">
          {projects.map((project) => (
            <ProjectCards project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;