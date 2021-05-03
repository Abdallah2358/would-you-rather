import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerVote } from '../Actions/shared';
import { ProgressBar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Todo : now there is 2 types of questions 
/* the first is the answered question which shows how many voted  */
/* the second  is the unanswered question which shows options to choose from  */
class Question extends Component {

    handleVote = (e) => {
        //this function is checks the two slices of  the question state
        /* slice option one and slice option two for the auth user then removes the user from it 
        if the user had chose the same answer by using toggles and filters in the question and user reducer 
          */

        /*Note for my future self :
        this logic is clearly wrong and the better approach is to have 
        used the questions provided array in the user slice of state since my implementation
         will result in bad user experience since the probability of a question
        having multiple  users voting is much higher which will make iterating over its 
        options array of both choice take usually longer resulting of more wait people wait no love.

        the only reason i will leave it is to remind myself that i can do better and to never do it again 
        of course   not because it is working and i am too lazy and good enough for review process  :D
        */
        /*
         how to improve first you will start by the action creator used you will 
        start by seprating the two toggles and thier api from each other 
        and then change the 
        below logic as commented below 
        */

        const { dispatch, question, authUser, } = this.props
        const voteData = {
            authedUser: authUser,
            qid: question.id,
            answer: e.target.value
        }
        /* improve: 
        
        if(question in users>answeredQuestions)
        then first check if you are receiving the same answer using the users slice answers 
        if so then just toggle both questions and users slices
        if not then 
            first dispatch toggle the questionsAnswer using  existing answer using the current state answer
            2nd : dispatch toggle the questionsAnswer using the received new answer
            3rd : dispatch the users toggle which in naturel of its reducer will handle the rest    
        */
        /* this can further improved by using the action creator handle to use the .getstate 
        method to just get a reference AKA pointer to state 
        using this reference to access unresisting objects will return undefined which is huge 
        in reducing the overhead in the reducer of using spread and objectkeys to check includes
        instead providing more scalability 
 
         to check if the questions  */
        if (question.optionOne.votes.includes(authUser)) {

            if (voteData.answer === "optionOne") {
                console.log('in 1');
                dispatch(handleAnswerVote(voteData))
            } else {
                console.log('in 2');
                dispatch(handleAnswerVote({
                    authedUser: authUser,
                    qid: question.id,
                    answer: 'optionOne'
                }))
                dispatch(handleAnswerVote(voteData))
            }
        } else if (question.optionTwo.votes.includes(authUser)) {
            if (voteData.answer === "optionTwo") {
                console.log('in 3');
                dispatch(handleAnswerVote(voteData))
            } else {
                console.log('in 4');
                dispatch(handleAnswerVote({
                    authedUser: authUser,
                    qid: question.id,
                    answer: 'optionTwo'
                }))
                dispatch(handleAnswerVote(voteData))
            }
        } else {
            console.log('in 5');
            dispatch(handleAnswerVote(voteData))
        }





    }
    votePrecept = (nVotes, total) => {
        if (!nVotes)
            return 0
        else if (nVotes === total)
            return 100
        else
            return nVotes / total * 100
    }

    render() {
        const { question, authUser, isAnswered ,isVoting } = this.props
        if (question === null) {
            return (<p>this question does not exist</p>)
        }
        const { optionOne, optionTwo } = question;

        let opOneVote = optionOne.votes.length ? optionOne.votes.length : 0;
        let opTwoVote = optionTwo.votes.length ? optionTwo.votes.length : 0;
        let totalVotes = optionOne.votes.length + optionTwo.votes.length

        return (

            <Link to={ isAnswered === 'true'?'/' :`/question/${question.id}`} className="card mx-5 my-4  border-4 rounded"  >
                <div className="card-body">
                   <h1>Would You Rather ?</h1>
                    {isVoting ==='true'? (<Button 
                        variant={optionOne.votes.includes(authUser) ? 'primary' : 'secondary'}
                        className='my-2'
                        onClick={(e) => this.handleVote(e)}
                        value={'optionOne'}>{optionOne.text}</Button>):
                        (<h5 
                        style ={optionOne.votes.includes(authUser) ? {color : 'green'} :{color : 'black'}}>{optionOne.text}</h5>)}

                    <ProgressBar
                        style={isAnswered === 'true' ? { } : { display: 'none'}}
                        now={this.votePrecept(opOneVote, totalVotes)}
                        label={`Percent = ${this.votePrecept(opOneVote, totalVotes)}% , Votes = ${opOneVote}`}
                        variant={opOneVote >= opTwoVote ? 'success' : 'info'}
                    />
                    {isVoting ==='true'?( <Button
                        variant={optionTwo.votes.includes(authUser) ? 'primary' : 'secondary'}
                        className='my-2'
                        onClick={(e) => this.handleVote(e)}
                        value={"optionTwo"}
                    > {optionTwo.text}  </Button>):
                    (<h5
                        style ={optionTwo.votes.includes(authUser) ? { color : 'green'} :{color : 'black'}}
                        >{optionTwo.text}</h5>) }
                   
                    <ProgressBar
                        style={isAnswered === 'true' ? {  } : {display: 'none'}}
                        now={this.votePrecept(opTwoVote, totalVotes)}
                        label={`Percent = ${this.votePrecept(opTwoVote, totalVotes)}% , Votes = ${opTwoVote}`}
                        variant={opTwoVote >= opOneVote ? 'success' : 'info'}
                    />

                </div>
            </Link>

        )
    }

}

function mapStateToProps({ questions, authUser, users }, { id }) {
    const question = questions[id];


    return ({
        question: question,
        user: users[authUser],
        authUser: authUser
    })

}
export default connect(mapStateToProps)(Question);
