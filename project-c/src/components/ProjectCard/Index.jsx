import React from 'react'
import {bsPencil, bsFillTrashFill} from 'react-icons/bs';

const ProjectCard = ({id,name,budget,category,handleRemove}) => {
    return (
        <>
        <div className='border-2 border-black p-8 w-1/6 flex flex-col gap-3'>
            <p>{id}</p>
            <p>{name}</p>
            <p>$ {budget}</p>
            <p>{category}</p>
        </div>
        </>
    );
};

export default ProjectCard