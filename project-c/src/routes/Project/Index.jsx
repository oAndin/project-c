import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

const Project = () => {
  const {id} = useParams()
  console.log(id);
  const [project, setProject] = useState([]);
  useEffect(() => {
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
  }, [id])
  return (
    <>
      <div
        className='h-screen'>
        <h1>Welcome to the editing page</h1>
        {project && (
        <span>
          <h3>{project.name}</h3>
        </span>
        )}


      </div>
    </>
  )
}

export default Project