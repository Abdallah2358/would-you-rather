import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { connect } from 'react-redux';
import { handleInitialData } from "../Actions/shared";
import { setAuthedUser } from '../Actions/authUser';
import LeaderBoard from './LeaderBoard';
import CreateQuestion from './CreateQuestion';
import { BrowserRouter, Route } from 'react-router-dom';
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
  logOut = () => {

    this.setState((prevState) => ({
      page: 'login',
      authedUser: ''
    }))
    this.props.dispatch(setAuthedUser(''))
  }

  render() {
    const { page, authedUser } = this.state
    //  if (authedUser) {
    /*  if (page === 'home') {
       return (
         <div className='container'>   <Nav changePage={this.changePage} logOut={this.logOut} />  <Home /> </div>)
     } else if (page === 'leader') {
       return (<div className='container' > <Nav changePage={this.changePage} logOut={this.logOut} /> <LeaderBoard /></div>);
     } else if (page === 'create') {
       return <div className='container' ><Nav changePage={this.changePage} logOut={this.logOut} /> <CreateQuestion /></div>
     } */
    return (
      <BrowserRouter>
        <div className='container' >
          <Nav changePage={this.changePage} logOut={this.logOut} />
          <Route path='/' exact  >
          {authedUser ? <Home/> : <Login authUser={this.authUser}/>}
          </Route>
          <Route path='/leaderBoard' >{authedUser ? <LeaderBoard/> : <Login authUser={this.authUser}/>}</Route> 
          <Route path='/add' >{authedUser ?<CreateQuestion /> : <Login authUser={this.authUser}/>} </Route> 
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
