import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import Message from "../../components/Message/Index";
import ProjectCard from '../../components/ProjectCard/Index';



const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(projects);
        setProjects(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


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
        <div>
          <span
            className='w-full flex p-8 '>
            <h1 className='text-xl'>Your projects...</h1>
          </span>
          {projects.length > 0 &&
            projects.map((project) =>
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                category={project.category.name}
                budget={project.budget} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Projects;