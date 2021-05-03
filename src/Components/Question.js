import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerVote } from '../Actions/shared';
import { ProgressBar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Question extends Component {
    state={
        answered :this.props.isAnswered
    }
    handleVote = (e) => {
     
        const { dispatch, question, authUser, } = this.props
        const voteData = {
            authedUser: authUser,
            qid: question.id,
            answer: e.target.value
        }
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
        this.setState((prevState)=>({answered : 'true'}))

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
        const { question, authUser ,isVoting } = this.props
        if (question === null) {
            return (<p>this question does not exist</p>)
        }
        const { optionOne, optionTwo } = question;
        const {answered} =this.state;

        let opOneVote = optionOne.votes.length ? optionOne.votes.length : 0;
        let opTwoVote = optionTwo.votes.length ? optionTwo.votes.length : 0;
        let totalVotes = optionOne.votes.length + optionTwo.votes.length

        return (

            <Link to={ answered === 'true'?'/' :`/question/${question.id}`} className="card mx-5 my-4  border-4 rounded"  >
                <div className="card-body">
                   <h1>Would You Rather ?</h1>
                   
                    {isVoting ==='true' ? (<Button 
                        variant={optionOne.votes.includes(authUser) ? 'primary' : 'secondary'}
                        className='my-2'
                        onClick={(e) => this.handleVote(e)}
                        value={'optionOne'}>{optionOne.text}</Button>):
                        (<h5 
                        style ={optionOne.votes.includes(authUser) ? {color : 'green'} :{color : 'black'}}>{optionOne.text}</h5>)}

                    <ProgressBar
                        style={answered === 'true' ? { } : { display: 'none'}}
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
                        style={answered === 'true' ? {  } : {display: 'none'}}
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
