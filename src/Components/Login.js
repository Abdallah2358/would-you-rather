import { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from '../Actions/authUser'
class Login extends Component {
   
    authUser = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(e.target.value))
        this.props.authUser(e.target.value)
        /* remember to route to home after in here */
    }

    render() {
        const { userIDs } = this.props;
        return (
            <div className='container justify-content-center ' >
                <form className="form-signin" >
                    <label htmlFor="exampleFormControlSelect1">Who are you ?</label>
                    <select className="form-control" id="accounts" defaultValue='disabled' onChange={ this.authUser} >
                        <option disabled value='disabled'>Choose Your Account</option>
                        {/* map people */}
                        {userIDs.map((id) => <option key = {id}>{id}</option>)}
                    </select>
                    
                </form>
            </div>
        );


    }

}

function mapStateToProps({ users ,authUser}) {
    return {
        userIDs: Object.keys(users),
    }
}
export default connect(mapStateToProps)(Login);