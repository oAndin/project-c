import React from 'react'
import { useLocation } from "react-router";
import Message from "../../components/Message/Index";
import { Link } from 'react-router-dom';


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
          <Message msg={message} type="sucess" />
        )}
        <div>
          <h1>Projects</h1>
          <button className='border-2 text-black border-black p-2 bg-white rounded-lg hover:bg-black hover:ease-in-out hover:duration-500 hover:text-hover-pattern'>
            <Link to='/new_project'>New Project</Link>
          </button>

        </div>
      </div>
    </>
  )
}

export default Projects;