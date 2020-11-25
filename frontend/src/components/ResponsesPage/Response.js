import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Redirect from 'react'

import './Response.css';
import * as questionActions from '../../store/question';
import * as responseActions from '../../store/response';

function Response({ data }) {
    const dispatch = useDispatch();
    // const { id } = useParams();

    // const question = useSelector((state) => state.questions[0]) || { Responses: [] };

    // useEffect(() => {
    //     dispatch(questionActions.question(id))
    // }, [dispatch]);

    const userId = useSelector((state) => state.session.user.id);

    const [input, setInput] = useState('');

    // const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(responseActions.newResponse({ response: input, userId }));
        // setRedirect(true);
    }

    // if (redirect) {
    //     return <Redirect to={`/questions/${id}`}/>
    // }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className='new-response-container'>
            <form onSubmit={handleSubmit}>
                <textarea name='response' value={input} onChange={handleChange} className='response-box' />
                <button type='submit' className='response-button'>Submit</button>
            </form>
        </div>
    )
}

export default Response;