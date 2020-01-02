const { createStore } = require('redux');
//  to set default of states
const defaultState = { value: 0 }
// reducer
// if state is undified, it will use default state
const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
}

// create store
const store = createStore(reducer);
// action
const myState = store.getState();
console.log(myState.value);
// dispath a action 
store.dispatch({type:"UP"});
console.log(store.getState().value);