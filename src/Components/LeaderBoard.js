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
    //sorting user ids by total questions enage
    let usersTotalQuestions ={}
    for (const key in users) {
        Object.assign(usersTotalQuestions ,
            {
                [key]: (users[key].questions.length)+(Object.keys(users[key].answers).length)
            })
    }
    let userIds = []
    let UsersKeys = Object.keys(users);
    UsersKeys.forEach(()=> {
        let largestKey = '';
        let largest = 0;
        let index = 0;
        let whereToSlice = 0

        for (const key of UsersKeys) {
            if (usersTotalQuestions[key] >= largest) {
                largestKey = key
                largest = usersTotalQuestions[key]
                whereToSlice = index
            }
            index += 1;
        }
        userIds.push(largestKey)
        UsersKeys = UsersKeys.slice(0, whereToSlice).concat(UsersKeys.slice(whereToSlice + 1, UsersKeys.length))
    })



    return {
        usersIDs: userIds,
        users: users,
        questions: questions,
    }
}

export default connect(mapStateToProps)(LeaderBoard);