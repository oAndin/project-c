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
    }, 5000)
  }, [id])

  return (
    <>
      <div className='h-screen p-8'>
        {project.name ?
          <div>
            <span>
              <h1>Project: {project.name}</h1>
              <button onClick={toggleProjectForm}
                className='border-2 border-black p-1'>
                {!showProjectForm ? 'Edit project' : 'Close'}
              </button>
              {!showProjectForm ? (
                <div>
                  <p>
                    <span>Category:</span><p>{project.category.name}</p>
                  </p>
                  <p>
                    <span>Total budget:</span><p>{project.budget}</p>
                  </p>
                  <p>
                    <span>Project cost:</span><p>{project.cost}</p>
                  </p>
                </div>
              ) : (
                <p>Project details</p>
              )}
            </span>
          </div> : (
            <Loader />
          )}
      </div>
    </>
  )
}

export default Project