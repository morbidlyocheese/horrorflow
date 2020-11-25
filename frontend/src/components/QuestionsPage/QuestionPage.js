/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './QuestionPage.css';
import * as questionActions from '../../store/question';

function QuestionPage({ data }) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const question = useSelector((state) => state.questions[0]) || { question: '', User: {}, Responses: [] };

    // const [upvote, updateUpvote] = useState(false);
    // const [downvote, updateDownvote] = useState(false);

    // const handleUpvote = () => {
    //     let currentUpvote = Response.rating;
    //     if (!upvote) {
    //         currentUpvote = currentUpvote + 1;
    //         updateUpvote(true);
    //     } else {
    //         updateUpvote(false);
    //     }
    // }
    // const handleDownvote = () => {
    //     let currentDownvote = Response.rating;
    //     if (!downvote) {
    //         // return document.addEventListener('click', () => {
    //         //     currentDownvote = currentDownvote - 1;
    //         // })
    //         console.log(currentDownvote, '---------DOWNVOTE--------')
    //         updateDownvote(true);
    //     } else {
    //         updateDownvote(false);
    //     }
    // }

    useEffect(() => {
        dispatch(questionActions.question(id))
    }, [dispatch]);

    let upvote;
    // upvote = response.rating

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
                        <li className='response'>{response.response}</li>
                        <div className='response-rating'>

                                <button onClick={() => (upvote += 1)}>
                                <div alt='upvote'/>
                                </button>
                                    <div className='rating-number'>{response.rating}</div>
                                <button /*onClick={handleDownvote} disabled={handleDownvote}*/>
                                    <div alt='downvote' className='downvote-button'/>
                                </button>
                        </div>
                    </div>
                    )}
                </ul>
            </div>
        </>
    )
};

export default QuestionPage;