import { FILTER } from "../constants";
import { FILTER_CHANGE } from "../actions/todoAction";

const initialState = FILTER.All

export default function filterReducer(state = initialState, action) {
    if(action.type === FILTER_CHANGE){
        return action.payload.filter
    }
    return state;
}