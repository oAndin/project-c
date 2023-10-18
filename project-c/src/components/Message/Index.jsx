import React, { useEffect, useRef, useState } from 'react';

const Message = ({ type, msg }) => {

    const [visible, setVisible] = useState(false);

    useEffect(()=> {
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(()=> {
            setVisible(false)
        }, 3500)

        return () => clearTimeout(timer);
    }, [msg])

    const typeOf = useRef(type)

    if (typeOf.current === 'sucess') {
        type = `bg-sucess-bg color-sucess-green border-sucess-border`
    }
    if (typeOf.current === 'error') {
        type = `bg-error-bg color-error-red border-error-border`
    }

    return (
        <>
            {visible && (
                <div className={`p-4 border-2 w-1/6 border-black my-0 mx-auto text-center rounded mb-8 mt-1 ${type}`}>
                    <h1>{msg}</h1>
                </div>
            )}
        </>
    );
};

export default Message;