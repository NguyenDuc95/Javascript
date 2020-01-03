import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/ToDoList';
import Footer from './components/Footer';
const todoListSameple=[
  {
    id:1,
    title:"todo1",
    is_completed:true
  },
  {
    id:2,
    title:"todo2",
    is_completed:false
  }
]
function App() {
  return (
    <div className="App">
      <div className="header-container"><Header/></div>
      <div className="content-container"><TodoList todoList={todoListSameple}/></div>
      <div className="footer-container"><Footer  filter="all"/></div>
      {/* //all/ active/complete */}
    </div>
  );
}

export default App;
