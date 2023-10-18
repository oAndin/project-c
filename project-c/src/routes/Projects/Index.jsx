import React from 'react'
import { useLocation } from "react-router";
import Message from "../../components/Message/Index";


const Projects = () => {

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message
  }
  return (

    <>
      <div className='h-screen'>
      {message && (
        <Message msg={message} type="sucess"/>
      )}
        <h1>All the projects will show up at here!</h1>

      </div>
    </>
  )
}

export default Projects;