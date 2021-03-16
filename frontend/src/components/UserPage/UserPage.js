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

    const questions = useSelector((state) => state.questions.questions);
    const user = useSelector((state) => state.questions.profile);
    console.log('questions -->', questions)
    console.log('user -->', user)

    useEffect(() => {
        dispatch(questionActions.displayUserQuestions(userId))
        // dispatch(questionActions.getUserInfo(userId))
    }, [dispatch, userId]);


    return (
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
        </div>
    )
}

export default UserPage;