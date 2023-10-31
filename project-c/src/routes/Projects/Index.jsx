import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router";
import Message from "../../components/Message/Index";
import ProjectCard from '../../components/ProjectCard/Index';
import Loader from '../../components/Loader/Index'
import BlurModal from '../../components/BlurModal/Index';
import { BlurContext } from '../../contexts/BlurContext/Index';
import ButtonOpenModal from '../../components/ButtonOpenModal/Index';


const Projects = () => {
  const {isOpen} = useContext(BlurContext);
  const {toggleIsOpen} = useContext(BlurContext);
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => {
          console.log(err);
        })
    }, 400)
  }, []);

  function removeProject (id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter((project) => project.id !== id))
      })
        //message confirming delete
  .catch(err => console.log(err))
  }

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message
  }

  return (
    <>
      <div className='h-screen'>
        {message && (
          <Message msg={message} type="sucess" />
        )}
        <div className='flex flex-col'>
          <span
            className='p-8'>
            <h1 className='text-xl'>Your projects...</h1>
          </span>
          <div id='container' className='flex justify-center gap-3 p-8'>
            {projects.length > 0 &&
              projects.map((project) => <ProjectCard

                  id={project.id}
                  key={project.id}
                  name={project.name}
                  category={project.category.name}
                  budget={project.budget} 
                  handleRemove={removeProject}
                  />
              )
            }
            {!removeLoading && <Loader />}
            {
            removeLoading && 
            projects.length === 0 && (<p> You dont have any projects yet!</p>)}
          </div>
          <ButtonOpenModal/>
          {isOpen && (<BlurModal/>)}  
        </div>
      </div >
    </>
  )
}

export default Projects;