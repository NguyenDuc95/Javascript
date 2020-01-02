import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import todoReducers from './todoReducer'
import employeesReducer from './employeesReducers'

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducers,
    employees:employeesReducer
})

export default rootReducer;