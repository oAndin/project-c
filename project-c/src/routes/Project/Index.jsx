import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Index';
import ProjectForm from '../../components/ProjectForm/Index';

const Project = () => {

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function editPost(project) {
    // budget validation 
    if (project.budget < project.cost) {
      // message
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        //message
      })
      .catch((err) => console.log((err)))
  }

  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          setProject(data)
        })
        .catch((err) => console.log(err))
    }, 500)
  }, [id])

  return (
    <>
      <div className='h-screen p-8 gap-2'>
        <span>
          <button onClick={toggleProjectForm}
            className='border-2 border-black p-1'>
            {!showProjectForm ? 'Edit project' : 'Close'}
          </button>
        </span>
        {project.name ?
          <div className='border-2 border-black p-4 bg-white text-black flex flex-col gap-2 w-1/2'>
            <h1 className='border-2 border-black'>Project: {project.name}</h1>
            {!showProjectForm ? (
              <div className='border-2 border-black flex flex-col gap-2 p-3'>
                <p className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Category:</span><p>{project.category.name}</p>
                </p>
                <p className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Total budget:</span><p>{project.budget}</p>
                </p>
                <p className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Project cost:</span><p>{project.cost}</p>
                </p>
              </div>
            ) : (
              <div id="form" className='w-full'>
                <ProjectForm handleSubmit={editPost} btnText='Edit Project' projectData={project} />
              </div>
            )}
          </div> : (
            <Loader />
          )}

      </div>
    </>
  )
}

export default Project