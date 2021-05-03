import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { connect } from 'react-redux';
import { handleInitialData } from "../Actions/shared";
import { setAuthedUser } from '../Actions/authUser';
import LeaderBoard from './LeaderBoard';
import CreateQuestion from './CreateQuestion';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import QuestionPage from './QuestionPage';
class App extends Component {
  state = {
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
      
      authedUser: user
    }))
  }
  logOut = () => {

    this.setState((prevState) => ({
      authedUser: ''
    }))
    this.props.dispatch(setAuthedUser(''))
  }

  render() {
    const {  authedUser } = this.state
    return (
      <BrowserRouter> <div className='container' >

        <Nav changePage={this.changePage} logOut={this.logOut} />
        <Switch>

          <Route exact path='/'   >
            {authedUser ? <Home /> : <Login authUser={this.authUser} />}
          </Route>
          <Route path = '/question/:id' >
          {authedUser? <QuestionPage />: <Login authUser={this.authUser}/>}
             </Route>
          <Route path='/leaderBoard' exact >{authedUser ? <LeaderBoard /> : <Login authUser={this.authUser} />}</Route>
          <Route path='/add' exact >{authedUser ? <CreateQuestion /> : <Login authUser={this.authUser} />} </Route>

          <Route path="*">
            {authedUser? <NoMatch />: <Login authUser={this.authUser}/>}
          </Route>

        </Switch>
      </div>
      </BrowserRouter>
    )

    /*     } else {
          return (<div className='container'>
            <Nav changePage={this.changePage} logOut={this.logOut} />
            <Login authUser={this.authUser} />
          </div>
          ) 
        }
        */
  }

}

export default connect()(App);


function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
      Error 404  No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}