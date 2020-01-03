import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';
import Header from '../components/Header';

const mapActionsToProps = {
    addTodo: addTodo
}
const HeaderContainer = connect(null,mapActionsToProps)(Header);

export default HeaderContainer;