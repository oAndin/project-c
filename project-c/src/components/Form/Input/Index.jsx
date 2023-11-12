
const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {

  return (
    <>
      <div
        className='flex flex-col mb-4 p-2.5'>
        <label htmlFor={name}
          className='mb-2.5 font-bold'>{text}:</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={handleOnChange}
          value={value}
          required
          className='text-black w-full p-1' />
      </div>
    </>
  );
};

export default Input;