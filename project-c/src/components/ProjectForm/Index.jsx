import React, { useEffect, useState } from 'react';
import Input from '../Form/Input/Index';
import Select from '../Form/Select/Index';
import SubmitButton from '../Form/SubmitButton/Index';

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err));
    }, [])
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
        console.log(project);
    };

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <>
            <div className='w-80'>
                <form onSubmit={submit}>
                    <Input
                        type='text'
                        text="Project's name"
                        name="name"
                        placeholder='Name here'
                        value={project.name ? project.name : ''}
                        handleOnChange={handleChange} />
                    <Input
                        type='number'
                        text="Project's budget"
                        name="budget"
                        placeholder='Budget here'
                        value={project.budget ? project.budget : ''}
                        handleOnChange={handleChange} />
                    <div>
                        <Select
                            name='category_id'
                            text='Select a category'
                            options={categories}
                            handleOnChange={handleCategory}
                            value={project.category ? project.category.id : ''}
                        />
                    </div>
                    <div className='flex justify-center mt-2.5'>
                        <SubmitButton btnText="Create new Project" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProjectForm;