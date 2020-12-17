import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Response.css';
import * as questionActions from '../../store/question';

function Response({ data }) {
    const dispatch = useDispatch();
    const { questionId } = useParams();

    const userId = useSelector((state) => state.session.user.id);

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(questionActions.newResponse({ response: input, questionId, userId }));
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className='new-response-form'>
            <form onSubmit={handleSubmit}>
                <textarea name='response' value={input} onChange={handleChange} className='response-box' />
                <button type='submit' className='response-button'>Submit</button>
            </form>
        </div>
    )
}

export default Response;