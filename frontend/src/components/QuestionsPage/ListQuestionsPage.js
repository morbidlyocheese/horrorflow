import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ListQuestionsPage.css';
import { displayQuestion, questionList } from '../../store/question';

function ListQuestionsPage({ questions }) {
    // const userId = useSelector((state) => state.session.user.id);
    // const dispatch = useDispatch();

    // const [input, setInput] = useState('');

    // const handleChange = (e) => {
    //     setInput(e.target.value);
    // }

    // return (
    //     <div className='questions-container'>
    //         <ul>
    //             {questions.map((question, vi) => <li key={i}>
    //                 <p style={{ padding: '5px' }} to={`/questions/${question}`}>{question}</p>
    //             </li>)}
    //         </ul>
    //     </div>
    // )
    return dispatch => {
        dispatch(questionList());
        fetch('/questions')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(questionList(res.questions));
                return res.questions;
            })
            
    }
};

export default ListQuestionsPage;