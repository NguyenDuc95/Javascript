import React, { Component } from 'react';
import './App.css';
import Sum from './component/sum'
import HandleEvent from './component/HandleEvent'
import FormInput from './component/FormInput';
import Hooks from './component/Hooks'
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <Sum _name="world" _number={1}/> */}
          {/* <HandleEvent /> */}
          {/* <FormInput/> */}
          <Hooks/>
        </header>
      </div>
    );
  }
  
}

export default App;
