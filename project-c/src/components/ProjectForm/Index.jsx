import React from 'react';
import Input from '../Form/Input/Index';
import Select from '../Form/Select/Index';
import SubmitButton from '../Form/SubmitButton/Index';

const ProjectForm = () => {
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
                        />
                    </div>
                    <div className='flex justify-center mt-2.5'>
                        <SubmitButton/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProjectForm;