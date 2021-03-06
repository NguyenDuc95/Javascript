import React, { Component } from 'react';
import './App.css';
import HomePage from './Component/HomePage';
import ToDoList from './Component/ToDoList';
import ErrorPage from './Component/ErrorPage';
import AutoFocusInput from './Component/AutoFocusInput'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="link-container">
              <NavLink activeClassName="active" to="/home-page" >Home Page</NavLink>
              <NavLink activeClassName="active" to="/author" >Author Config</NavLink>
              <NavLink activeClassName="active" to="/to-do" >To Do</NavLink>
            </div>

          </header>
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home-page" component={HomePage} />
              <Route path="/author" component={AutoFocusInput} />
              <Route path="/to-do" component={ToDoList} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

