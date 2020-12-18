import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SplashPage({ data }) {
    const dispatch = useDispatch();

    return (
        <div className='questions-container'>
            <ul>
                {questions.map((question) =>
                    <li className='question'>
                        <a className='question-link' href={`/questions/${question.id}`}>{question.question}</a>
                        <p>Posted by: {question.User.username}</p>
                        <p className='question-created'>Created On: {question.createdAt}</p>
                    </li>)}
                <li>{data}</li>
            </ul>
        </div>
    )
};

export default ListQuestionsPage;