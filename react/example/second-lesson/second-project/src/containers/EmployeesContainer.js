import { connect } from 'react-redux';
import AsyncList from '../Component/AsyncList';
import {requestEmployee} from '../actions/employees'

function mapStateToProps(state) {
    return { listItems: state.employees.listItems };
}
const mapActionsToProps= {
    updateEmployee: requestEmployee
  
}
const EmployeesContainer = connect(mapStateToProps,mapActionsToProps)(AsyncList);
export default EmployeesContainer;