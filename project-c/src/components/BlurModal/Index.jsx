import React, { useContext, useState } from 'react'
import ButtonOpenModal from '../ButtonOpenModal/Index';
import { BlurContext } from '../../contexts/BlurContext/Index';



const BlurModal = () => {
    const [isOpen, setIsOpen] = useContext(BlurContext);

    function handleOpen() {
        setIsOpen(true)
    };
    function handleClose() {
        setIsOpen(false)
    };

    return (
        <div>
            {isOpen && (
                <div
                    id='blur'
                    className='absolute top-0 left-0 backdrop-blur-3xl opacity-80 w-full h-screen'
                    onClick={handleClose}>
                </div>
            )
            }
            <ButtonOpenModal text='Open Modal' handleOpenModal={handleOpen} />
        </div>
    )
}

export default BlurModal;