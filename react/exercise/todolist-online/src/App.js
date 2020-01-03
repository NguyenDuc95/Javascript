import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoListContainer from './containers/TodoListContainers';
import HeaderContainers from './containers/HeaderContainer';

const todoListSameple = [
  {
    id: 1,
    title: "todo1",
    is_completed: true
  },
  {
    id: 2,
    title: "todo2",
    is_completed: false
  }
]
function App() {
  return (
    <div className="App">
      <div className="header-container"><HeaderContainers/></div>
      <div className="content-container"><TodoListContainer /></div>
      <div className="footer-container"><Footer filter="all" /></div>
      {/* //all/ active/complete */}
    </div>
  );
}

export default App;
