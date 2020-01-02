import { connect } from 'react-redux';
import Counter2 from '../Component/Counter2';
import  { actionCrease,actionDecrease,actionMul } from '../actions/counter'
function mapStateToProps(state) {
    return { counter: state.counter.counter };
}
const mapActionsToProps= {
    increaseCounter: actionCrease,
    decreaseCounter: actionDecrease,
    mulCounter: actionMul
}
const CounterContainer = connect(mapStateToProps,mapActionsToProps)(Counter2);
export default CounterContainer;