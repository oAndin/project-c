import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Index';
import ProjectForm from '../../components/ProjectForm/Index';
import Message from '../../components/Message/Index';

const Project = () => {

  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState();
  const [showServiceForm, setServiceForm] = useState();
  const [message, setMessage] = useState();
  const [type, setType] = useState();


  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }
  function toggleServiceForm() {
    setServiceForm(!showServiceForm)
  }

  function editPost(project) {
    setMessage('');
    // budget validation 
    if (project.budget < project.cost) {
      setMessage('The project cost setted must fit the project budget!')
      setType('error')
      return false;
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
        setMessage('Project updated sucefully!')
        setType('sucess')
        alert('project updated sucefully!')
        console.log(message);
      })
      .catch((err) => console.log((err)))
  }


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
        {message && <Message type={type} />}

        {project.name ?

          <div className='border-2 border-black p-4 bg-white text-black flex flex-col gap-2 w-1/2'>
            <span>
              <button onClick={toggleProjectForm}
                className='border-2 border-black p-1'>
                {!showProjectForm ? 'Edit project' : 'Close'}
              </button>
            </span>
            <h1 className='border-2 border-black'>Project: {project.name}</h1>
            {!showProjectForm ? (
              <div className='border-2 border-black flex flex-col gap-2 p-3'>
                <div className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Category:</span><p>{project.category.name}</p>
                </div>
                <div className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Total budget:</span><p>{project.budget}</p>
                </div >
                <div className='flex gap-1 flex-col'>
                  <span className='bg-black text-hover-pattern'>Project cost:</span><p>{project.cost}</p>
                </div>
              </div>
            ) : (
              <div id="form" className='w-full'>
                <ProjectForm
                  handleSubmit={editPost}
                  btnText='Edit Project'
                  projectData={project} />
              </div>
            )}
            <div className='border-2 border-black p-2'>
              <button
                className='p-2 border-2 border-black'
                onClick={toggleServiceForm}>
                {!showServiceForm ? 'Add service' : 'Close'}
              </button>
              <div className='p-2'></div>
              {showServiceForm && <div>Formulario de serviço</div>}
              <div
                id='Container'
                className='border-2 border-black'>
                <p>Itens de serviço</p>
              </div>
            </div>
          </div> : (
            <Loader />
          )}
      </div>
    </>
  )
}

export default Project