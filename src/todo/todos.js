import React from 'react';

function Todos(props) {
    return (
        <div><h1>Your todos for today</h1>
            <div data-todos-count>You have {props.todos.length} todos!</div>
        </div>
    )
}

Todos.defaultProps = { todos: [] };

export default Todos;