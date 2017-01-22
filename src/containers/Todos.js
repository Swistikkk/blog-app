import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const Todos = connect((state) => { return {todos: state.todos}})(TodoList);

export default Todos;




