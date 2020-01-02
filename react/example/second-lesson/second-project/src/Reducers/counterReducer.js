import { COUNTER_INCREASE, COUNTER_DECREASE, COUNTER_MUL } from '../actions/counter';

const initialState = {
    counter: 0
}
export default function counterReducer(state = initialState, action) {
    if(!action){
        return state;
    }
    switch (action.type) {
        case COUNTER_INCREASE:
            // state.counter = state.counter+ action.payload; => NG
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case COUNTER_DECREASE:
            // state.counter = state.counter+ action.payload; => NG
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case COUNTER_MUL:
            return {
                ...state,
                counter: state.counter * 2
            }
        default:
            return state;
    }
}