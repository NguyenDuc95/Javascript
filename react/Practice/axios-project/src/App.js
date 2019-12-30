import React, { Component } from 'react';
import './App.css';
import HandleAxios from './Component/HandleAxios'

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div> something here </div>
          <HandleAxios/>
        </header>
      </div>
    );
  }
  
}

