import React, { useEffect, useRef } from 'react'
import { BsPencil, BsFillTrashFilll, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {

    let colorCategory = useRef('');

    switch (colorCategory) {
        case colorCategory.current === 'infrastructure':
            colorCategory = 'bg-infrastructure'
            break;
        case colorCategory.current === 'development':
            colorCategory = 'bg-development'
            break;
        case colorCategory.current === 'design':
            colorCategory = 'bg-design'
            break;
        default: colorCategory = 'bg-planning';
    }

    // if(colorCategory === 'Infrastructure') {
    //     colorCategory = 'bg-infrastructure'
    // }
    // if(colorCategory === 'Development') {
    //     colorCategory = 'bg-development'
    // }
    // if(colorCategory === 'Design') {
    //     colorCategory = 'bg-design'
    // }
    // if(colorCategory === 'Planning') {
    //     colorCategory = 'bg-planning'
    // }

    useEffect(()=> {
        console.log((category))
    },[])
    return (
        <>
            <div className='border-2 flex flex-col p-8'>
                <p>{id}</p>
                <p>{name}</p>
                <p>{budget}</p>
                <div className='flex justify-center items-center gap-3'>
                    <span className={`w-2 h-2 bg-black rounded-full ${colorCategory}`}></span><p>{category}</p>
                </div>
                <div id="cardActions">
                    <Link to='/'><BsPencil/>Editar</Link>
                    <Link to='/'><BsFillTrashFill/>Remover</Link>
                </div>
            </div>
        </>
    );
};

export default ProjectCard