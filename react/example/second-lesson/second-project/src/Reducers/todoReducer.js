const initialState = []
export default function todoReducers(state = initialState, action) {
    switch (action.type) {
        case 'TODO_ADD':
            // state.counter = state.counter+ action.payload; => NG
            return [
                ...state,
                action.payload
            ]
        case 'TODO_DELETE':
            // state.counter = state.counter+ action.payload; => NG
            return [
                ...state,
                action.payload
        ]

        default:
            return state;
    }
}