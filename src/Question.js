import React, { useState } from 'react'
import {AiOutlineMinusSquare,AiOutlinePlusSquare } from 'react-icons/ai'; 

const Question = ({name,text}) => {
    const [showInfo,setShowInfo]=useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{name}</h4>
                <h1 className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo? <AiOutlineMinusSquare />: <AiOutlinePlusSquare />}</h1>
            </header>
            {showInfo && <p>{text}</p>}
        </article>
    )
}

export default Question;
