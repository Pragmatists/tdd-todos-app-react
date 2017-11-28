import React from 'react';

function TodosList(props) {
    const renderTodo = (todo) => {
        return (
            <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Yes': 'No'}</td>
                <td></td>
            </tr>
        )
    };
    return (
        <div>
            <div>
                <table data-todos-table>
                    <thead>
                        <tr>
                            <th>What I should do</th>
                            <th>Completed?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.todos.map(renderTodo)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

TodosList.defaultProps = { todos: [] };

export default TodosList;