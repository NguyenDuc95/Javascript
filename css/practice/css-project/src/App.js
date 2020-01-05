import React, { Component } from 'react';
import './App.css';
import Transport from './component/transport';
import MemoryGame from './component/MemoryGame';
import MoveObject from './component/MoveObject';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Transport/>
        {/* <MemoryGame/> */}
        {/* <MoveObject /> */}
      </div>
    );
  }

}

