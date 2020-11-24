import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './QuestionsPage.css';
import { newQuestion } from '../../store/question';
import ListQuestionsPage from './ListQuestionsPage';

function QuestionsPage() {
    const userId = useSelector((state) => state.session.user.id);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newQuestion({ question: input, userId}));
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className='question-container'>
            <form onSubmit={handleSubmit}>
                <textarea name='question' value={input} onChange={handleChange} className='question-box'/>
                <button type='submit' className='question-button'>Submit</button>
            </form>
        </div>
    )
}

export default QuestionsPage;