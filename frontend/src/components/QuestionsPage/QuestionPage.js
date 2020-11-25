/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './QuestionPage.css';
import * as questionActions from '../../store/question';

import Response from '../ResponsesPage/Response';

function QuestionPage({ data }) {
    const dispatch = useDispatch();
    const { questionId } = useParams();

    const question = useSelector((state) => state.questions[0]) || { question: '', User: {}, Responses: [] };

    const userId = useSelector((state) => state.session.user.id);

    const response = useSelector((state) => state.responses || { response: '', User: {} });

    const handleVote = (responseId, rating, questionId) =>{
        dispatch(questionActions.changeVote(responseId, rating, questionId))
    }

    useEffect(() => {
        dispatch(questionActions.question(questionId))
    }, [dispatch, questionId]);

    return (
        <>
            <div className='question-container'>
                <ul>
                    <li className='question'>
                        <i>{question.User.username} <b>Says:</b></i>
                        {question.question}
                    </li>
                </ul>
            </div>
            <div className='responses-container'>
                <ul className='responses'>
                <div className='responses-header'>Responses:</div>
                    {question.Responses.map(response => 
                    <div>
                        <li className='response'>
                            <i>{response.User.username}</i>
                        </li>
                        <li className='response-responded'>Responded With:</li>
                        <li className='response-text'>{response.response}</li>
                        <div className='rating-container'>
                            <div className='response-rating'>
                                    <button className='vote-button' onClick={() => {handleVote(response.id, response.rating + 1, response.questionId)}}>
                                    <div alt='upvote' className='upvote-button'/>
                                    </button>
                                        <div className='rating-number'>{response.rating}</div>
                                    <button className='vote-button' onClick={() => { handleVote(response.id, response.rating - 1, response.questionId) }}>
                                        <div alt='downvote' className='downvote-button'/>
                                    </button>
                            </div>
                        </div>
                    </div>
                    )}
                <li id='new-response-container'><Response/></li>
                </ul>
            </div>
        </>
    )
};

export default QuestionPage;