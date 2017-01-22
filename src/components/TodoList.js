import React from 'react';
import Todo from './Todo'

let TodoList = ({todos}) => (
    <ul>
        {
            todos.map( (todo) =>
             <Todo {...todo} />
            )
        }
    </ul>
);

export default TodoList