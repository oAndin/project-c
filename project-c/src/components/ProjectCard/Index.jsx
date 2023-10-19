import React from 'react'
import { bsPencil, bsFillTrashFill } from 'react-icons/bs';

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
    return (
        <>
            <div className='border-2 flex flex-col p-8'>
                <p>{id}</p>
                <p>{name}</p>
                <p>{budget}</p>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-2 h-2 bg-black rounded-full'></span><p>{category}</p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard