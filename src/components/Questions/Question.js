import React, { useState } from 'react';

const Question = (
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions
) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    return( 
        <div>
            {<h1>Question {currQues + 1}</h1>}

            {/* <div className='singleQuestion'>
                <h2>{questions[currQues]?.question}</h2>
            </div> */}
        </div>
    )
}

export default Question;