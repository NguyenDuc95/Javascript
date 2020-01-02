import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Component/Controller';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.props.myState}</div>
          <Controller />
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myState: state.value }
}
export default connect(mapStateToProps)(App);
