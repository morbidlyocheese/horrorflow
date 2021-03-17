import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ListQuestionsPage.css';
import * as questionActions from '../../store/question';

function ListQuestionsPage({ data }) {
    const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(questionActions.questionList())
        }, [dispatch]);

    const questions = useSelector((state) => state.questions.questions);
    function questionDate() { 
        let date;
        questions.map((question) => {
            const created = question.createdAt;
            date = created.split('T');
            return date[0];
        });
        return date[0];
    };
    
    return (
        <div className='questions-container'>
            {<ul>
                {questions && questions.map((question) => 
                    <div className='question' key={question.id}>
                        <Link to={`/questions/${question.id}`} className='question-link'>{question.question}</Link>
                        <p className='posted-by'>Posted by: </p>{question.User &&  <a href={`/users/${question.User.id}/profile`} className='question-username'> {question.User.username}</a>}
                <p className='question-created'>Posted On: {questionDate()}</p>
                </div>)}
                <p>{data}</p>
            </ul>}
        </div>
    )
};

export default ListQuestionsPage;