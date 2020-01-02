import { EMPLOYEE_UPDATE } from "../actions/employees";

const initialState = {
    listItems: []
}
export default function todoReducers(state = initialState, action) {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {
                ...state,
                listItems: action.payload
            }
        default:
            return state;
    }
}