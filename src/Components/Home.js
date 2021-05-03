import { Button } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import Question from './Question'
class Home extends Component {
    state = {
        page: 'unanswered'
    }
    togglePage = (e) => {
        this.setState((prevState) => ({
            page: prevState.page === 'answered' ? 'unanswered' : 'answered'
        }))

    }
    render() {

        const { questionIds, answeredQuestionIds } = this.props;
        const unAnsweredQuesID = questionIds.filter((id) => !answeredQuestionIds.includes(id))
        return (
            <div >
                <Button
                    value={this.state.page}
                    onClick={this.togglePage}
                >go to {this.state.page === 'answered' ? 'unanswered' : 'answered'}</Button>
                {console.log(' unansquestion :', unAnsweredQuesID, 'answered:', answeredQuestionIds)}
                {this.state.page === 'unanswered' ?
                    unAnsweredQuesID.map((id) => <Question isVoting={'false'} isAnswered={'false'} key={id} id={id} />) :
                    answeredQuestionIds.map((id) => <Question isVoting={'false'} isAnswered={'true'} key={id} id={id} />
                    )}
            </div>
        );

    }


}

function mapStateToProps(state) {
    const { users, questions, authUser } = state;
    let answers ={}
    if(authUser){
         answers = users[authUser].answers
    }
    return {
        answeredQuestionIds:  Object.keys(answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authUser,
    }
}

export default connect(mapStateToProps)(Home);