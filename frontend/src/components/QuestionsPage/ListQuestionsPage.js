import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ListQuestionsPage.css';
import * as questionActions from '../../store/question';

function ListQuestionsPage({ data }) {
    const dispatch = useDispatch();

    const questions = useSelector((state) => state.questions.questions[0]);
    console.log('question list --> ', questions)
    function questionDate() { 
        let date;
        questions.map((question) => {
            const created = question.createdAt;
            date = created.split('T');
            return date[0];
        });
        return date[0];
    };

    useEffect(() => {
        dispatch(questionActions.questionList())
    }, [dispatch]);
    
    return (
        <div className='questions-container'>
            {<ul>
                {questions && questions.map((question) => 
                    <li className='question' key={question.id}>
                        <Link to={`/questions/${question.id}`} className='question-link'>{question.question}</Link>
                {question.User && <p className='question-username'>Posted by: {question.User.username}</p>}
                <p className='question-created'>Created On: {questionDate()}</p>
                </li>)}
                <li>{data}</li>
            </ul>}
        </div>
    )
};

export default ListQuestionsPage;