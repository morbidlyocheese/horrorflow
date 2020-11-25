/* eslint-disable no-unused-vars */
import React from 'react';
import { fetch } from './csrf';

const CREATE_QUESTION = 'question/createQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';
// const UPVOTE_QUESTION = 'question/upvoteQuestion';
// const DOWNVOTE_QUESTION = 'question/downvoteQuestion';
const DISPLAY_QUESTIONS = 'question/displayQuestions';
const DISPLAY_QUESTION = 'question/displayQuestion';
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

function displayQuestion(singleQuestion) {
    return {
        type: DISPLAY_QUESTION,
        payload: singleQuestion,
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
    dispatch(displayQuestions(res.data.questions));
    return res;
}

export const questionList = () => async (dispatch) => {
    const res = await fetch('/api/questions');
    dispatch(displayQuestions(res.data.questions));
    return res;
}

export const question = (id) => async (dispatch) => {
    const res = await fetch(`/api/questions/${id}`);
    dispatch(displayQuestion(res.data.question));
    return res;
}







const questionReducer = (state = [], action) => {
    let newState;
    switch(action.type) {
        case CREATE_QUESTION:
            return [...state, action.payload];
        case REMOVE_QUESTION:
            newState = Object.assign({}, state);
            newState.question = null;
            return newState;
        case DISPLAY_QUESTIONS:
            return action.payload;
        case DISPLAY_QUESTION:
            return [action.payload];
        default:
            return state;
    }
}

export default questionReducer;