import { Component } from "react";
import { connect } from "react-redux";

class User extends Component {

    render() {

        const { userId ,user } = this.props
        if (!user) {
            return <div>loading </div>
        }
        return (<div className=' row d-flex justify-content-center my-5' >

            <div className="card" style={{ width: '70%', }}>
                <img src={user.avatarURL} className="card-img-top my-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{userId}</h5>
                    {console.log('in user comp , the user  :',user)}
                    <p className="card-text"> asked : {user.questions.length}</p>
                    <p className="card-text"> answered : {Object.keys(user.answers).length}</p>
                   
                </div>
            </div>
        </div>);
    }
}

function mapStateToProps(state, props) {
    const { users } = state
    const { userId } = props
    const user = users ? users[userId] : null;

    return {
        user: user,

    }
}

export default connect(mapStateToProps)(User);