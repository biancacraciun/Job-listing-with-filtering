import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Jobs from './components/base/jobs';
import Error from './components/error/error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {
          this.props.error ?
          <Error /> :
          null
        }
        <Jobs />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    error: state.error,
    show: state.show
  }
};

export default connect(mapStateToProps)(App);
