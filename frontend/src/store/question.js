import React from 'react';
import { fetch } from './csrf';

const CREATE_QUESTION = 'question/createQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';
const UPVOTE_QUESTION = 'question/upvoteQuestion';
const DOWNVOTE_QUESTION = 'question/downvoteQuestion';
const DISPLAY_QUESTIONS = 'question/displayQuestions';
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

function displayQuestions(questions) {
    return {
        type: DISPLAY_QUESTIONS,
        payload: questions,
    }
}

export const newQuestion = (data) => async (dispatch) => {
    const { question, userId } = data;
    const res = await fetch('/api/questions', {
        method: 'POST',
        body: JSON.stringify({
            question,
            userId
        }),
    });
    dispatch(createQuestion(res.data.question));
}

export const deleteQuestion = () => async (dispatch) => {
    const res = await fetch('/api/questions', {
        method: 'DELETE',
    });
    dispatch(removeQuestion());
    return res;
}

export const questionList = (data) => async (dispatch) => {
    const { question, userId, rating } = data;
    const res = await fetch('/api/questions', {
        method: 'GET',
        body: JSON.stringify({
            question,
            userId,
            rating
        }),
    });
    dispatch(displayQuestions(res.data.question));
    return res;
}

const questionReducer = (state = { questions: [] }, action) => {
    let newState;
    switch(action.type) {
        case CREATE_QUESTION:
            newState = Object.assign({}, state);
            newState.questions = [...newState.questions, action.payload];
            return newState;
        case REMOVE_QUESTION:
            newState = Object.assign({}, state);
            newState.question = null;
            return newState;
        case DISPLAY_QUESTIONS:
            newState = Object.assign({}, state);
            newState.questions = [...newState.questions, action.payload];
            return newState;
        default:
            return state;
    }
}

export default questionReducer;