/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import * as questionActions from '../../store/question';
import Response from '../ResponsesPage/Response';

import './QuestionPage.css';
import '../ResponsesPage/Response.css';

function QuestionPage({ data }) {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const { responseId } = useParams();

    const sessionUser = useSelector(state => state.session.user);

    const question = useSelector((state) => state.questions[0]) || { question: '', User: {}, Responses: [] };

    const userId = useSelector((state) => state.session.user.id);

    const response = useSelector((state) => state.responses || { response: '', User: {} });

    const handleVote = (responseId, rating, questionId) =>{
        dispatch(questionActions.changeVote(responseId, rating, questionId))
    }

    useEffect(() => {
        dispatch(questionActions.question(questionId))
    }, [dispatch, questionId]);

    const [redirect, setRedirect] = useState(false);

    const handleQuestionDelete = (e) => {
        e.preventDefault();
        
        if (question.userId === sessionUser.id || sessionUser.username === 'admin') {
            dispatch(questionActions.deleteQuestion(questionId, userId, response.id));
            setRedirect(true);
        } else {
            alert("You cannot delete things that aren't yours!");
        }
    }
    
    if (redirect) {
        return <Redirect to='/questions/' />
    }

    const handleResponseDelete = (e) => {
        e.preventDefault();
        const responseId = e.target.id;
        
        dispatch(questionActions.deleteResponse(responseId, userId, questionId))
    }

    if (sessionUser.id === question.userId) {
        return (
            <>
            <div className='question-container'>
                <p className='question'>
                    <i className='question-username'>{question.User.username}: </i>
                    <p className='question-text'>{question.question}</p>
                    <button className='delete-button' onClick={handleQuestionDelete}>Delete</button>
                </p>
            </div>
                <div className='responses-container'>
                    <ul className='responses'>
                        <div className='responses-header'>Responses:</div>
                        {question.Responses && question.Responses.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).map(response =>
                            <div>
                                <li className='response'>
                                    <i>{response.User.username}:</i>
                                </li>
                                <li className='response-text'>{response.response}</li>
                                <button id={response.id} className='delete-button' onClick={handleResponseDelete} disabled={sessionUser.id !== response.userId && sessionUser.username !== 'admin'}>Delete</button>
                                <div className='rating-container'>
                                    <div className='response-rating'>
                                        <button className='vote-button' onClick={() => { handleVote(response.id, response.rating + 1, response.questionId) }}>
                                            <div alt='upvote' className='upvote-button' />
                                        </button>
                                        <div className='rating-number'>{response.rating}</div>
                                        <button className='vote-button' onClick={() => { handleVote(response.id, response.rating - 1, response.questionId) }}>
                                            <div alt='downvote' className='downvote-button' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <li id='new-response-container'>
                            <Response />
                        </li>
                    </ul>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='question-container'>
                    <div className='question'>
                        <a href={`/users/${question.User.id}/profile`}>{question.User.username}: </a>
                        <p>{question.question}</p>
                        <button className='delete-button' onClick={handleQuestionDelete}>Delete</button>
                    </div>
                </div>
                <div className='responses-container'>
                    <ul className='responses'>
                        <div className='responses-header'>Responses:</div>
                        {question.Responses && question.Responses.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).map(response =>
                            <div>
                                <li className='response'>
                                    <i>{response.User.username}:</i>
                                </li>
                                <li className='response-text'>{response.response}</li>
                                <button id={response.id} className='delete-button' onClick={handleResponseDelete} disabled={sessionUser.id !== response.userId && sessionUser.username !== 'admin'}>Delete</button>
                                <div className='rating-container'>
                                    <div className='response-rating'>
                                        <button className='vote-button' onClick={() => { handleVote(response.id, response.rating + 1, response.questionId) }}>
                                            <div alt='upvote' className='upvote-button' />
                                        </button>
                                        <div className='rating-number'>{response.rating}</div>
                                        <button className='vote-button' onClick={() => { handleVote(response.id, response.rating - 1, response.questionId) }}>
                                            <div alt='downvote' className='downvote-button' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <li id='new-response-container'>
                            <Response />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
};

export default QuestionPage;