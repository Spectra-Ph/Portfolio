import React from 'react';
import nep from '../styles/Neptune_rotation.mp4';
import "../styles/Projects.css"
import 'typeface-roboto';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div>
      <video src={nep} autoPlay loop muted/>
      <div className='projects-test'>PROJECTS</div>
      <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default Projects;