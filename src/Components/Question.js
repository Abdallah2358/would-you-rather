import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerVote } from '../Actions/shared';
import { ProgressBar, Button, Card } from 'react-bootstrap';

//Todo : now there is 2 types of questions 
/* the first is the answered question which shows how many voted  */
/* the second  is the unanswered question which shows options to choose from  */
class Question extends Component {

    handleVote = (e) => {
        const { dispatch, question, authUser } = this.props
        const voteData = {
            authedUser: authUser,
            qid: question.id,
            answer: e.target.value
        }
        if (question.optionOne.votes.includes(authUser)) {
            if (voteData.answer === "optionOne") {
                dispatch(handleAnswerVote(voteData))
            } else {
                dispatch(handleAnswerVote({
                    authedUser: authUser,
                    qid: question.id,
                    answer: 'optionOne'
                }))
                dispatch(handleAnswerVote(voteData))
            }
        } else if (question.optionTwo.votes.includes(authUser)) {
            if (voteData.answer === "optionTwo") {
                dispatch(handleAnswerVote(voteData))
            } else {
                dispatch(handleAnswerVote({
                    authedUser: authUser,
                    qid: question.id,
                    answer: 'optionTwo'
                }))
                dispatch(handleAnswerVote(voteData))
            }
        } else {
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
        const { question, authUser } = this.props
        if (question === null) {
            return (<p>this question does not exist</p>)
        }
        const { optionOne, optionTwo, id } = question;

        let opOneVote = optionOne.votes.length ? optionOne.votes.length : 0;
        let opTwoVote = optionTwo.votes.length ? optionTwo.votes.length : 0;
        let totalVotes = optionOne.votes.length + optionTwo.votes.length
        return (

            <div className="card mx-5 my-4  border-4 rounded  " >
                <div className="card-body">
                    <h1>Would You Rather ?</h1>
                    <Button 
                    variant={optionOne.votes.includes(authUser)? 'primary' : 'secondary'} 
                     className='my-2' 
                     onClick={(e) => this.handleVote(e)}
                      value={'optionOne'}>{optionOne.text}</Button>
                    <ProgressBar
                        now={this.votePrecept(opOneVote, totalVotes)}
                        label={opOneVote}
                        variant={opOneVote >= opTwoVote ? 'success' : 'info'} 
                    />


                    <Button
                        variant={optionTwo.votes.includes(authUser)? 'primary' : 'secondary'}
                        className='my-2'
                        onClick={(e) => this.handleVote(e)}
                        value={"optionTwo"}
                    > {optionTwo.text}  </Button>
                    <ProgressBar
                        now={this.votePrecept(opTwoVote, totalVotes)}
                        label={opTwoVote}
                        variant={opTwoVote >= opOneVote ? 'success' : 'info'}
                    />

                </div>
            </div>

        )
    }

}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id];


    return ({
        question: question ? question : null,

    })

}
export default connect(mapStateToProps)(Question);
