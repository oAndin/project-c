import React, { useState } from 'react'



const BlurModal = () => {
    const [isOpen, setIsOpen] = useState(true);

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
        </div>
    )
}

export default BlurModal