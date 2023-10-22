import React from 'react'

const ButtonOpenModal = ({ textButton, handleOpen }) => {


    return (
        <>
            <button
                className='border-2 border-black'
                onClick={handleOpen}>
                {textButton}
            </button>
        </>
    )
}

export default ButtonOpenModal