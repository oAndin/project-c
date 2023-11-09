import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Index';

const Project = () => {

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
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
      <div className='h-screen p-8'>
        { project.name ?
          <div className='border-2 border-black p-4 bg-white text-black flex gap-2'>
            <h1 className='bg-slate-400'>Project: {project.name}</h1>
            {!showProjectForm ? (
              <div className='border-2 border-black'>
                <p className='flex gap-1'>
                  <span className='bg-slate-400'>Category:</span><p>{project.category.name}</p>
                </p>
                <p className='flex gap-1'>
                  <span className='bg-slate-400'>Total budget:</span><p>{project.budget}</p>
                </p>
                <p className='flex gap-1'>
                  <span className='bg-slate-400'>Project cost:</span><p>{project.cost}</p>
                </p>
              </div>
            ) : (
              <p>Project details</p>
            )}
          </div> : (
            <Loader />
          )}
        <span>
          <button onClick={toggleProjectForm}
            className='border-2 border-black p-1'>
            {!showProjectForm ? 'Edit project' : 'Close'}
          </button>
        </span>
      </div>
    </>
  )
}

export default Project