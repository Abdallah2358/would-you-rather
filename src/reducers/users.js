import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS } from "../Actions/users";
import { TOGGLE_USER_ANSWER } from '../Actions/users'
export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case TOGGLE_USER_ANSWER:
            let answers = {
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
            };
            if (Object.keys(state[action.authedUser].answers).includes(action.qid)) {
                if (state[action.authedUser].answers[action.qid] === action.answer) {
                    console.log('in reducer in 1');
                    answers = {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    };
                    delete answers[action.qid]; 
                } else {
                    console.log('in reducer in 2');
                    answers = {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: answers
                }
            }
        case ADD_USER_ANSWER:
            const  modifiedAnswers = {
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
            };
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: modifiedAnswers
                }
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: [...state[action.authedUser].questions, action.qid]
                }
            }
        default:
            return state;

    }
}