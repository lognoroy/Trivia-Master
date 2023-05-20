import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {setUserId} from '../redux/result_reducer'
import '../styles/Main.css'
export default function Main()
{
    const inputRef=useRef(null);
    const dispatch=useDispatch()

    function startQuiz()
    {
        if(inputRef.current?.value)
        {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return(
        <div className='container'>
            <h1 className='title text-light'>TriviaMaster</h1>
            <h1 className='instruc'>Instructions:</h1>
            <ol>
                <li>The quiz consists of 10 consecutive questions, with each correct answer being worth 10 points.</li>
                <li>Each question presents three options, allowing participants to select a single choice.</li>
                <li>Participants have the flexibility to review and modify their answers before the quiz concludes.</li>
                <li>The final result will be announced upon completion of the quiz, indicating the overall performance.</li>
                <li>This interactive quiz experience is designed to engage participants and reward their knowledge with a strong emphasis on accuracy and strategic decision-making.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*'></input>
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    )
}






















