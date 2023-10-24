import React, { useRef } from 'react';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {

    const remove = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        let answer = confirm('Are you sure?');
        answer ? handleRemove(id) : alert('The project was not deleted')
    }

    let colorCategory = useRef(category);
    switch (colorCategory.current) {
        case 'Infrastructure':
            colorCategory = 'bg-infrastructure'
            break;
        case 'Development':
            colorCategory = 'bg-development'
            break;
        case 'Design':
            colorCategory = 'bg-design'
            break;
        default: colorCategory = 'bg-planning';
    }
    // let colorCategory = useRef(category);
    // switch (colorCategory.current) {
    //     case (colorCategory.current) === 'Infrastructure':
    //         colorCategory = 'bg-infrastructure'
    //         break;
    //     case (colorCategory.current) === 'Development':
    //         colorCategory = 'bg-development'
    //         break;
    //     case (colorCategory.current) === 'Design':
    //         colorCategory = 'bg-design'
    //         break;
    //     default: colorCategory = 'bg-planning';
    // }

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

    //     console.log((category))
    return (
        <>
            <div className='border-2 border-black flex flex-col p-8 gap-3'>
                <div id='top' className='bg-black flex justify-between p-2 rounded'>
                    <p className='text-white'>{name}</p>
                    <p className='text-white'>id: {id}</p>
                </div>
                <p>$ {budget}</p>
                <div className='flex justify-center items-center gap-3'>
                    <span className={`w-2 h-2 bg-black rounded-full ${colorCategory}`}></span><p>{category}</p>
                </div>
                <div id="cardActions" className=' flex gap-3 w-full '>
                    {/* <Link to={`/project/{id}`}> */}
                    <Link to={`/project/${id}`}>
                        <button id='edit' className='w-28 gap-2 bg-white flex items-center border-2 border-black p-1 hover:bg-black hover:text-white ease-out duration-500'>
                            <BsPencil />
                            <p>Edit</p>
                        </button>
                    </Link>
                    <button
                        id='remove'
                        onClick={remove}
                        className='flex w-24 gap-2 bg-white items-center border-2 border-black p-1 hover:bg-black hover:text-white ease-out duration-500'>
                        <BsFillTrashFill />
                        <p>Remove</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;