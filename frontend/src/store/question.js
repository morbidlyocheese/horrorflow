import React from 'react';
import { fetch } from './csrf';

const CREATE_QUESTION = 'question/createQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';
const UPVOTE_QUESTION = 'question/upvoteQuestion';
const DOWNVOTE_QUESTION = 'question/downvoteQuestion';
// const EDIT_QUESTION = 'question/editQuestion';

function createQuestion(question) {
    return {
        type: CREATE_QUESTION,
        payload: question,
    };
};

function removeQuestion() {
    return {
        type: REMOVE_QUESTION,
    };
};

export const newQuestion = (data) => async (dispatch) => {
    const { question, userId } = data;
    const res = await fetch('/api/questions', {
        method: 'POST',
        body: JSON.stringify({
            question,
            userId
        }),
    });
    console.log(res.data.question, '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    dispatch(createQuestion(res.data.question));
}

const questionReducer = (state = { questions: [] }, action) => {
    let newState;
    switch(action.type) {
        case CREATE_QUESTION:
            newState = Object.assign({}, state);
            newState.questions = [...newState.questions, action.payload];
            return newState;
        default:
            return state;
    }
}

export default questionReducer;