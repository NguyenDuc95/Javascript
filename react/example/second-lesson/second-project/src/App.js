import React, { Component } from 'react';
import './App.css';
import Counter from './Component/Counter'

export default class App extends Component {
  counterRef = React.createRef();
  decreaseCounter = () => {
    console.log(this.counterRef.current);
    const counter = this.counterRef.current;
    counter.decreaseCounter();

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.decreaseCounter}>Decrease</button>
          <Counter step={1} ref={this.counterRef}/>
        </header>
      </div>
    );
  }

}

