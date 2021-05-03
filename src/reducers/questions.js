import { ADD_QUESTION, RECEIVE_QUESTIONS, TOGGLE_ANSWER, ADD_ANSWER } from "../Actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case TOGGLE_ANSWER:
            return {
                ...state,
                [action.qid]:
                {
                    ...state[action.qid],
                    [action.answer]:
                    {
                        ...state[action.qid][action.answer],
                        votes:
                            state[action.qid][action.answer].votes.includes(action.authedUser) ?
                                state[action.qid][action.answer].votes.filter((vote) => vote !== action.authedUser) :
                                state[action.qid][action.answer].votes.concat(action.authedUser),
                    }

                }
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.qid]:
                {
                    ...state[action.qid],
                    [action.answer]:
                    {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.authedUser),
                    }

                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: { ...action.question }
            }
        default:
            return state;

    }
}