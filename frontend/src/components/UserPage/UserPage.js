import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as questionActions from '../../store/question';

import './UserPage.css';

function UserPage() {
    const dispatch = useDispatch();
    let userId = useParams();
    userId = userId.id;
    userId = parseInt(userId);

    const questions = useSelector((state) => state.questions.userQuestions);
    const responses = useSelector((state) => state.questions.userResponses);
    const user = useSelector((state) => state.questions.profile);
    const state = useSelector((state) => state);

    console.log('state ->', state)

    useEffect(() => {
        dispatch(questionActions.displayUserQuestions(userId))
    }, [dispatch, userId]);

    return (
        <div className='profile-outer-container'>
            <div className='profile-container'>
                <div className='user-page-container'>
                    <div className='user-questions-container'>
                        <h1 className='user-page-question-title'>
                            {user.username}'s Questions:
                        </h1>
                        {questions && questions.map((question) => (
                        <a href={`/questions/${question.id}`} className='profile-question' key={question.id}>{question.question}</a>
                        ))}
                    </div>
                </div>
                {(responses.length > 0) ?
                <div className='user-response-container'>
                    <div className='user-responses-container'>
                        <h1 className='user-page-response-title'>
                            {user.username}'s Responses:
                        </h1>
                        {responses && responses.map((response) => (
                        <a href={`/questions/${response.id}`} className='profile-response' key={response.id}>{response.response}</a>
                        ))}
                    </div>
                </div> : <></>}
            </div>

        </div>
    )
}

export default UserPage;