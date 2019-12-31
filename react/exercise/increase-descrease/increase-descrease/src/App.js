import React, { Component } from 'react';
import './App.css';
import IncreaseDecrease from './component/IncreaseDecrease.js';
import FormInput from './component/FromInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Training 1
        </header>

        <div>
          <div className="exercise1">
            <h2>Exercise 1</h2>
            <IncreaseDecrease className="Exercise1" />
          </div>
          <div className="exercise2">
            <h2>Exercise 2</h2>
            <IncreaseDecrease isDisable={true} />
          </div>
          <div className="exercise3">
            <h2>Exercise 3</h2>
            <FormInput />
          </div>

        </div>

      </div>
    );
  }

}

export default App;
