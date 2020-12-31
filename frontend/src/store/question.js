/* eslint-disable no-unused-vars */
import React from 'react';
import { fetch } from './csrf';

const CREATE_QUESTION = 'question/createQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';
const DISPLAY_QUESTIONS = 'question/displayQuestions';
const DISPLAY_QUESTION = 'question/displayQuestion';

const CREATE_RESPONSE = 'response/createResponse';
const REMOVE_RESPONSE = 'response/removeResponse';

function createQuestion(question) {
    return {
        type: CREATE_QUESTION,
        payload: question,
    };
};

function removeQuestion(question) {
    return {
        type: REMOVE_QUESTION,
        payload: question
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

function removeResponse(response) {
    return {
        type: REMOVE_RESPONSE,
        payload: response
    };
};

export const newResponse = (data) => async (dispatch) => {
    const { questionId, userId, response } = data;
    const res = await fetch('/api/responses/', {
        method: 'POST',
        body: JSON.stringify({
            questionId,
            userId,
            response
        }),
    });
    console.log(displayQuestions, '<-- data')
    dispatch(displayQuestion(res.data.question));
}

export const deleteResponse = (responseId, userId, questionId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/responses/`, {
            method: 'DELETE',
            body: JSON.stringify({
                responseId,
                userId,
                questionId
            })
        })
        console.log(res.data, '<-- res.data')
        dispatch(displayQuestion(res.data.question));
        return res;
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
    return dispatch(createQuestion(res.data.question));
}

export const deleteQuestion = (questionId, userId) => async (dispatch) => {
    const res = await fetch(`/api/questions/`, {
        method: 'DELETE',
        body: JSON.stringify({
            questionId,
            userId        
        })
    });
    dispatch(removeQuestion(res));
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

export const changeVote = (responseId, rating, questionId) => async (dispatch) => {
    const body = { questionId, responseId, rating };
    const res = await fetch('/api/vote', {
        method: 'PUT',
        body: JSON.stringify(body),
    });
    dispatch(displayQuestion(res.data.question));
}




const questionReducer = (state = [], action) => {
    let newState;
    switch(action.type) {
        case CREATE_QUESTION:
            return [...state, action.payload];
        case DISPLAY_QUESTIONS:
            return action.payload;
        case DISPLAY_QUESTION:
            return [action.payload];
        case REMOVE_QUESTION:
            newState = state.filter(question => question === action.payload);
            // newState.question = null;
            return newState;
        case CREATE_RESPONSE:
            newState = [...state];
            newState[0].Responses.push(action.payload);
            return newState;
        case REMOVE_RESPONSE:
            newState = Object.assign({}, state);
            newState.response = null;
            return newState;
        default:
            return state;
    }
}

export default questionReducer;