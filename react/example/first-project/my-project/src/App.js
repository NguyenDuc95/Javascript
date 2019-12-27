import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FancyText from './components/FancyText'


class App extends Component {
  state = {
    showCounter: true
  }

  render() {
    const testObj = { a: 1, b: 2 };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}><FancyText>Toggle counter</FancyText></button>
          {this.state.showCounter ? <Counter startAt={1} testObj={testObj} /> : null}
        </header>
      </div>
    );
  }

}

export default App;
