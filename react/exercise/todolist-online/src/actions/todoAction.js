export const TODO_ADD = 'TODO_ADD';
export const addTodo = (id, title) => {
    return {
        type: TODO_ADD,
        payload: {id,title}
    }
}

export const TODO_TOGGLE = 'TODO_TOGGLE';
export const toggleTodo = (id, is_completed) => {
    return {
        type: TODO_TOGGLE,
        payload:
        {
            id: id,
            is_completed: is_completed
        }
    }
}


export const TODO_UPDATE = 'TODO_UPDATE';
export const updateTodoList = (todoList) => {
    return {
        type: TODO_UPDATE,
        payload: { todoList }
    }
}

export const FILTER_CHANGE = 'FILTER_CHANGE';
export const changeFilter = (filter) => {
    return {
        type: FILTER_CHANGE,
        payload: filter
    }
}