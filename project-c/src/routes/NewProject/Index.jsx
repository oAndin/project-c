import React from 'react'
import ProjectForm from '../../components/ProjectForm/Index';

const NewProject = () => {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center gap-5'>
        <h1>New project</h1>
        <p>Create and new project and start to add the services</p>
        <p>form</p>
        <ProjectForm />
      </div>
    </>
  );
};

export default NewProject;