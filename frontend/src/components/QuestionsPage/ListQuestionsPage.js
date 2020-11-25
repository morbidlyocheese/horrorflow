/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ListQuestionsPage.css';
import * as questionActions from '../../store/question';
import * as sessionActions from '../../store/session';

function ListQuestionsPage({ data }) {
    const dispatch = useDispatch();

    const questions = useSelector((state) => state.questions);
    
    useEffect(() => {
        dispatch(questionActions.questionList())
    }, [dispatch]);

    const handleOnChange = () => {

    }
    
    return (
        <div className='questions-container'>
            <ul>
                {questions.map((question) => 
                <li className='question'>
                        <a className='question-link' href={`/questions/${question.id}`}>{question.question}</a>
                <p>Posted by: {question.User.username}</p>
                <p>Rating: {question.rating}</p>
                <p className='question-created'>Created On: {question.createdAt}</p>
                </li>)}
                <li>{data}</li>
            </ul>
        </div>
    )
};

export default ListQuestionsPage;