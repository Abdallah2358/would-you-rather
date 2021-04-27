import React, { Component } from 'react';
import Question from './Question';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { getInitialData } from '../utils/api'
import { connect } from 'react-redux';
import { handleInitialData } from "../Actions/shared";
class App extends Component {
  componentDidMount() {
   this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <div className='container'>
        <Nav />
        <Login />

      </div>

    );
  }

}

export default connect()(App);
