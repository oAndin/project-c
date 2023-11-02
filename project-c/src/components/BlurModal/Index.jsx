import React, { useContext } from 'react'
import { BlurContext } from '../../contexts/BlurContext/Index';
import { AiOutlineClose } from 'react-icons/ai';



const BlurModal = () => {
    const { isOpen, toggleIsOpen } = useContext(BlurContext);
    return (
        <div>
            {isOpen && (
                <div
                    onClick={toggleIsOpen}
                    id='blur'
                    className='absolute top-0 left-0 backdrop-blur-3xl opacity-80 w-full h-screen'>
                    <AiOutlineClose
                        className='text-5xl hover:cursor-pointer'
                        onClick={() => toggleIsOpen} />
                </div>
            )
            }
        </div>
    )
    
}

export default BlurModal;