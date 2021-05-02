import React, { Component } from 'react';
import Question from './Question';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { getInitialData } from '../utils/api'
import { connect } from 'react-redux';
import { handleInitialData } from "../Actions/shared";
import {setAuthedUser} from '../Actions/authUser';
class App extends Component {
  state = {
    page: 'login',
    authedUser: ''
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  changePage = (page) => {
    this.setState((prevState) => ({
      page: page
    }))
  }
  authUser = (user) => {
    this.setState((prevState) => ({
      page: 'home',
      authedUser: user
    }))
  }
logOut=()=>{

  this.setState((prevState) => ({
    page: 'login',
    authedUser: ''
  }))
  this.props.dispatch(setAuthedUser(''))
}

  render() {
    const { page, authedUser } = this.state
    if (authedUser) {
      if (page === 'home') {
        return (
          <div className='container'>   <Nav changePage={this.changePage} logOut={this.logOut}/>  <Home /> </div>)
      } else if (page === 'leader') {
        return <div><Nav changePage={this.changePage}  logOut={this.logOut}/> leader</div>
      } else if (page === 'create') {
        return <div><Nav changePage={this.changePage} logOut={this.logOut}/> create</div>
      }
    } else {
      return (<div className='container'>
        <Nav changePage={this.changePage}  logOut={this.logOut}/>
        <Login authUser={this.authUser} /> 
        </div>
      )
    }

  }

}

export default connect()(App);
