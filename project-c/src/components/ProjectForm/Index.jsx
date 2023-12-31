import React, { useEffect, useState } from 'react';
import Input from '../Form/Input/Index';
import Select from '../Form/Select/Index';
import SubmitButton from '../Form/SubmitButton/Index';
import Loader from '../Loader/Index';

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
    const [removeLoading, setRemoveLoading] = useState(true);
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
        setTimeout(() => {
            handleSubmit(project);
            setRemoveLoading(false);
        }, 500);
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
            <div className='w-full'>
                <form
                    className='bg-black text-white placeholder:text-slate-500'
                    onSubmit={submit}>
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
                        <SubmitButton btnText={btnText} />
                    </div>
                    {!removeLoading && (
                        <Loader />
                    )}
                </form>
            </div>
        </>
    );
};

export default ProjectForm;