import React from 'react';
import { fetch } from './csrf';

// import  * as questionActions  from './question';

const CREATE_RESPONSE = 'response/createResponse';
const REMOVE_RESPONSE = 'response/removeResponse';

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

export const newResponse = (data) => async (dispatch) => {
    const { question, userId, response } = data;
    const res = await fetch('/api/questions/', {
        method: 'POST',
        body: JSON.stringify({
            question,
            userId,
            response
        }),
    });
    dispatch(createResponse(res.data.response));
}

// export const deleteResponse = () => async (dispatch) => {
//     const res = await fetch('/api/questions', {
//         method: 'DELETE',
//     });
//     dispatch(questionActions.displayQuestions(res.data.questions));
//     return res;
// }

const responseReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case CREATE_RESPONSE:
            return [...state, action.payload];
        // case REMOVE_RESPONSE:
        //     newState = Object.assign({}, state);
        //     newState.question = null;
        //     return newState;
        default:
            return state;
    }
}

export default responseReducer;