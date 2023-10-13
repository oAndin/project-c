import React from 'react';

const ProjectForm = () => {
    return (
        <>
            <div className='border-2 border-black flex flex-col justify-center items-center h-48 w-48'>
                <form >
                    <input
                        type="text"
                        placeholder="Project's name"
                        className='border-2 border-black' />
                    <input
                        type="text"
                        placeholder="Total project's budget "
                        className='border-2 border-black' />
                    <select
                        name="category_id" id=""
                        className='border-2 border-black'>
                        <option disabled>Chose a category</option>
                    </select>
                    <input
                    type="submit" 
                    value="Create project"
                    className='border-2 border-black' />
                </form>
            </div>
        </>
    );
};

export default ProjectForm;