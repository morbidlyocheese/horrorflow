/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ListQuestionsPage.css';
import * as questionActions from '../../store/question';

function ListQuestionsPage({ data }) {
    const dispatch = useDispatch();

    const questions = useSelector((state) => state.questions);
    console.log(questions.questions);

    useEffect(() => {
        dispatch(questionActions.questionList())
    }, [dispatch])
    return (
        <div className='questions-container'>
            <ul>
                {questions.map((question) => 
                <li className='question'>
                        <a className='question-link' href={`/questions/${question.id}`}>{question.question}</a>
                {question.userId}
                </li>)}
                <li>{data}</li>
            </ul>
        </div>
    )
};

export default ListQuestionsPage;