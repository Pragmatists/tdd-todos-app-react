import React from 'react';
import TodosList from "./todosList";
import TodosNew from "./todosNew";

function Todos(props) {
    return (
        <div className={'col-md-offset-2'}>
            <h1 data-todos-header>Your todos for today</h1>
            <div data-todos-count>You have {props.todos.length} todos!</div>
            <TodosNew onNewTodo={(todo) =>props.todos.push(todo)}/>
            <TodosList todos={props.todos}/>
        </div>
    )
}

Todos.defaultProps = { todos: [] };

export default Todos;