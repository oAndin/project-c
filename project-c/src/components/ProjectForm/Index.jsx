import React, { useEffect, useState } from 'react';
import Input from '../Form/Input/Index';
import Select from '../Form/Select/Index';
import SubmitButton from '../Form/SubmitButton/Index';

const ProjectForm = () => {

    const [categories, setCategories] = useState([]);

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
    console.log(categories);
    return (
        <>
            <div className='w-80'>
                <form>
                    <Input
                        type='text'
                        text="Project's name"
                        name="name"
                        placeholder='Name here' />
                    <Input
                        type='number'
                        text="Project's budget"
                        name="budget"
                        placeholder='Budget here' />
                    <div>
                        <Select
                            name='category_id'
                            text='Select a category'
                            options={categories}
                        />
                    </div>
                    <div className='flex justify-center mt-2.5'>
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProjectForm;