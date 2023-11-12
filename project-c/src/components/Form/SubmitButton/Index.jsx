
const SubmitButton = ({ btnText }) => {
    return (
        <>
            <div>
                <button
                    className='bg-black text-white p-3 w-full mb-1 border-white border-2 transition-300 cursor-pointer hover:text-hover-pattern'>
                    {btnText}
                </button>
            </div>
        </>
    )
}

export default SubmitButton;