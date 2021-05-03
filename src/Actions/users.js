export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const TOGGLE_USER_ANSWER = 'TOGGLE_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
//receive USER action creator 
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS
        , users
    }

}

export function toggleUserAnswer({ authedUser, qid, answer }) {
    return {
        type: TOGGLE_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function addUserAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestionToUser({ qid, authedUser }) {
    return {
        type: ADD_USER_QUESTION,
        qid,
        authedUser
    }
}