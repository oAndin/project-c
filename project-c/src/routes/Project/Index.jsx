import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Index';

const Project = () => {
  const { id } = useParams();

  const [project, setProject] = useState([]);

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
              {project.name}
            </span>
          </div> : (
            <Loader />
          )}
      </div>
    </>
  )
}

export default Project