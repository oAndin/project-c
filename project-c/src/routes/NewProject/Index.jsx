import { useNavigate } from 'react-router-dom';
import React from 'react'
import ProjectForm from '../../components/ProjectForm/Index';

const NewProject = () => {
  const navigate = useNavigate()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate('/projects',{state : {message:'Projected created successfully'}})
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center gap-5'>
        <h1>New project</h1>
        <p>Create and new project and start to add the services</p>
        <p>form</p>
        <ProjectForm
          handleSubmit={createPost}
          btnText="Create new project" />
      </div>
    </>
  );
};

export default NewProject;