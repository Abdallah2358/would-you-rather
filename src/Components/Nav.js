import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class    Nav  extends Component {
    render(){
    const active = 'nav-link  mx-5 p-1 rounded border-success border-4'
    const inactive = 'nav-link  mx-2 p-1 rounded'
    const {authUser ,logOut }=this.props
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light rounded">
            <ul className="nav  col-sm" >
            <li className="nav-item">
                <Link className={active} to = '/'
                 value='home' >Home</Link>
            </li>
            <li className="nav-item">
                <Link className={inactive} 
                to= '/leaderBoard'
                value='leader'
                >leader board</Link>
            </li>
            <li className="nav-item">
                <Link className={inactive}
                to ='/add'
                value='create' >New Question</Link>
            </li>
          
        </ul>
        <span className="navbar-text mx-2 pr-5">{authUser}</span>
        <span className="navbar-text mx-2 pr-5" onClick= {()=>logOut()} >
    {authUser?'/logout':'login'}
    </span>
        </nav>

    );

    }
}
function mapStateToProps({ authUser }) {
    return ({
        authUser:  authUser
    })

}
export default connect(mapStateToProps)(Nav) ;