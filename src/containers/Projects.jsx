import React, { useContext } from 'react';
import './Projects.css';

import Card from '../components/Card/Card';

import AppContext from '../context/AppContext';


function Projects()
{
  const {
    state: { projects }
  } = useContext(AppContext);

  return (
    <div className="Projects">
      {projects.map(proj => (
        <Card key={proj.id} item={proj} />
      ))}
    </div>
  )
}

export default Projects;
