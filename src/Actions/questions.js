export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'
//receive questions action creator 
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS
    , questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}



export function toggleQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: TOGGLE_ANSWER,
    authedUser,
    qid,
    answer
  }
}
