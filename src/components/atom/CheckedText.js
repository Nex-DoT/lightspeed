import React from 'react';
import { BsCheckLg } from "react-icons/bs";

const CheckedText = ({text}) => {
    return (
        <div className='font-semibold flex flex-col gap-3 pt-3'>
            <div className='flex items-center gap-3'>
                <span><BsCheckLg className='text-lime-500'/></span>
                <p>{text}</p>
            </div>
            <hr/>
        </div>
    );
};

export default CheckedText;