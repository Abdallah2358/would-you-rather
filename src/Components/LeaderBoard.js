import { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
class LeaderBoard extends Component {

    render() {

        const { usersIDs, users, questions } = this.props;
        if (!users) {
            return <div> loading </div>
        }
        return (
            <div >

                {console.log(' users :', users, '   questions  :', questions)}

                { usersIDs.map((id) => <User key={id} userId={id}> </User>)}


            </div>
        );

    }


}

function mapStateToProps(state) {
    const { users, questions } = state
    let usersTotalQuestions ={}
    for (const key in users) {
        Object.assign(usersTotalQuestions ,
            {
                [key]: (users[key].questions.length)+(Object.keys(users[key].answers).length)
            })
    }
    let UsersKeys = Object.keys(users);
    UsersKeys.sort((a,b)=> usersTotalQuestions[b]-usersTotalQuestions[a] )
    return {
        usersIDs: UsersKeys,
        users: users,
        questions: questions,
    }
}

export default connect(mapStateToProps)(LeaderBoard);