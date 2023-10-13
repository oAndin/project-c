import React from 'react'
import ProjectForm from '../../components/ProjectForm/Index';

const NewProject = () => {
  return (
    <>
      <div className='h-screen'>
        <h1>New project</h1>
        <p>Create and new project and start to add the services</p>
        <p>form</p>
        <ProjectForm/>
      </div>
    </>
  );
};

export default NewProject;