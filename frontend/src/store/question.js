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

const CREATE_RESPONSE = 'response/createResponse';
const REMOVE_RESPONSE = 'response/removeResponse';


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

function createResponse(response) {
    return {
        type: CREATE_RESPONSE,
        payload: response,
    };
};

function removeResponse() {
    return {
        type: REMOVE_RESPONSE,
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

export const newResponse = (data) => async (dispatch) => {
    const { questionId, userId, response } = data;
    console.log(questionId, userId, response);
    const res = await fetch('/api/responses/', {
        method: 'POST',
        body: JSON.stringify({
            questionId,
            userId,
            response
        }),
    });
    dispatch(displayQuestion(res.data.question));
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
        case CREATE_RESPONSE:
            newState = [...state];
            newState[0].Responses.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export default questionReducer;