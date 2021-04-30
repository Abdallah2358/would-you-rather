export const RECEIVE_USERS = 'RECEIVE_USERS'
export const TOGGLE_USER_ANSWER = 'TOGGLE_USER_ANSWER'
//receive USER action creator 
export function receiveUsers(users) {
    return {
        type : RECEIVE_USERS
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

