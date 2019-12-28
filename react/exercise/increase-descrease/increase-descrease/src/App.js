import React, { Component } from 'react';
import './App.css';
import EncreaseDescrease from './component/EncreaseDecrease.js';
import FormInput from './component/FromInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Training 1
        </header>
        <body>
          <div>
            <div className="exercise1">
              <h2>Exercise 1</h2>
              <EncreaseDescrease className="Exercise1" />
              
            </div>
            <div className="exercise2">
            <h2>Exercise 2</h2>
              <EncreaseDescrease isDisable={true} />
            </div>
            <div className="exercise3">
            <h2>Exercise 3</h2>
              <FormInput />
            </div>

          </div>
        </body>
      </div>
    );
  }

}

export default App;
