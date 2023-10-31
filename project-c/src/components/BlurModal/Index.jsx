import React, { useContext} from 'react'
import { BlurContext } from '../../contexts/BlurContext/Index';



const BlurModal = () => {
    const {isOpen} = useContext(BlurContext);
    const {toggleIsOpen} = useContext(BlurContext);
    return (
        <div>
            {isOpen && (
                <div
                    onClick={toggleIsOpen}
                    id='blur'
                    className='absolute top-0 left-0 backdrop-blur-3xl opacity-80 w-full h-screen'>
                </div>
            )
            }
        </div>
    )
}

export default BlurModal;