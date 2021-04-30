import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER'
//receive questions action creator 
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS
    , questions
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
