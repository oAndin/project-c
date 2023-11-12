import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import ProjectForm from '../../components/ProjectForm/Index';
import Loader from '../../components/Loader/Index';

const NewProject = () => {
  const [removeLoading, setRemoveLoading] = useState(false);

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
      })
      .catch((err) => console.log(err))
      .finally(() => {
        // redirect
        setRemoveLoading(true)
        navigate('/projects', { state: { message: 'Projected created successfully' } })
      })
  };

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center gap-5'>
        <h1>New project</h1>
        <p>Create and new project and start to add the services</p>
        <div className='w-1/2'>
          <ProjectForm
            handleSubmit={createPost}
            btnText="Create new project" />
        </div>
      </div>
      {removeLoading && (
        <Loader />
      )}
    </>
  );
};

export default NewProject;