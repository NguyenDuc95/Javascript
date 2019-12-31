import React, { Component } from 'react';
import './App.css';
import ToDoList from './Component/ToDoList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TO DO LIST</h1>
        </header>
        <div>
          <ToDoList />
        </div>
      </div>
    );
  }

}


