import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import todoReducers from './todoReducer'


const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoReducers,
})

export default rootReducer;