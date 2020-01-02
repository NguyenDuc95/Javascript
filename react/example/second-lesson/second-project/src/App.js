import React, { Component } from 'react';
import './App.css';
import Counter from './Component/Counter';
import CounterContainer from './containers/CounterContainer';
import EmployeeContainer from './containers/EmployeesContainer'
import AsyncList from './Component/AsyncList';
import AutoFocusInput from './Component/AutoFocusInput'
import { BrowserRouter, Switch, Route, NavLink,Link} from 'react-router-dom';
import HomePage from './Component/Homepage'
import ErrorPage from './Component/ErrorPage'

export default class App extends Component {
  counterRef = React.createRef();

  decreaseCounter = () => {
    console.log(this.counterRef.current);
    const counter = this.counterRef.current;
    counter.decreaseCounter();

  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="link-container">
              <NavLink activeClassName="active" to="/counter">counter</NavLink>
              <NavLink activeClassName="active" to="/counter2/:id" >counter2</NavLink>
              <NavLink activeClassName="active" to="/list" >list</NavLink>
              <NavLink activeClassName="active" to="/input" >input</NavLink>
            </div>
            <div className="conten-container">
              {/*  use render to render component with param */}
              {/* home page need ahead, error page is at end  */}
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/counter/:id" component={Counter} />
                <Route path="/counter2/:id" component={CounterContainer} />
                <Route path="/list" component={EmployeeContainer} />
                <Route path="/input" render={()=><AutoFocusInput type="text" defaulValue="something"/>} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </header>
        </div>
      </BrowserRouter>

    );
  }

}

