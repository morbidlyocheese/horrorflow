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

    const questions = useSelector((state) => state.questions[0]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(questionActions.displayUserQuestions(userId))
        // dispatch(questionActions.getUserInfo(userId))
    }, [dispatch, userId]);

    // console.log(questions)
    // console.log(user)

    return (
        <div className='profile-container'>
            <div className='user-page-container'>
                <div className='user-questions-container'>
                    <h1 className='user-page-question-title'>
                        Questions Asked:
                    </h1>
                    {questions && questions.map((question) => (
                    <p className='profile-question'>{question.question}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserPage;