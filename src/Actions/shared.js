import { getInitialData, saveQuestion } from '../utils/api'
import { addQuestionToUser, receiveUsers } from "./users";
import { addQuestion, receiveQuestions } from "./questions";
import { setAuthedUser } from "./authUser";
import {saveQuestionAnswer} from '../utils/api';
import {toggleQuestionAnswer} from './questions';
import {toggleUserAnswer} from './users';
/* Todo: remove this id an replace it by  the one received from login */
const authedId = 'sarahedo'

export function handleInitialData() {

    return (dispatch) => {
        return getInitialData().then(
            ({ users, questions }) => {
                //invokes the case of RECEIVE_USERS in users reducers
                //which returns the state adding to it all users
                //note for self in actual application this useless and in secure 
                //since you wont fetch all users date to any client side 
                dispatch(receiveUsers(users));
                //invokes the case of RECEIVE_USERS in question reducers 
                //which graps all question and adds it to the store 
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(authedId));
            }
        )
    }
}

export function handleAnswerVote(info ) {
    return(dispatch )=>{

        dispatch(toggleQuestionAnswer(info))
        dispatch(toggleUserAnswer(info))
    

      return saveQuestionAnswer(  info)
      .catch((err) => {
        console.warn('error in handle save answer :', err);
       dispatch(toggleUserAnswer(info))
        dispatch(toggleQuestionAnswer(info)); 
        alert('there is an error in saving your vote ');
      });
    }
}

export function handleAddQuestion(op1, op2) {
    return (dispatch, getsState) => {
      const { authUser } = getsState();
      return saveQuestion({
        optionOneText: op1,
        optionTwoText: op2,
        author: authUser
      }).then(
        (question) => {
          console.log(question.id);
          dispatch(addQuestion(question));
            dispatch(addQuestionToUser({
                qid:question.id,
                authedUser:authUser
            })
          ) 
        return question})
      
    }
  }