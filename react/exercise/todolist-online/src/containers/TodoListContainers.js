import { connect } from 'react-redux';
import TodoList from '../components/ToDoList';
function mapStateToProps(state) {
    console.log(state);
    return { todoList: state.todoList }
}

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;