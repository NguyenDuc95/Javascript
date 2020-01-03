import { TODO_ADD, TODO_TOGGLE, TODO_UPDATE } from "../actions/todoAction";

const initialState =
    [
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


export default function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_ADD:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    is_completed: false,
                }]
        case TODO_TOGGLE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        is_completed: action.payload.is_completed
                    }
                }
                return todo;
            })

        case TODO_UPDATE:
            return action.payload.todoList;
        default:
            return state
    }
}