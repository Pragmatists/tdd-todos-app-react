import React from 'react';
import { Button, Table } from 'react-bootstrap';

function TodosList(props) {
    const renderTodo = (todo) => {
        return (
            <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Yes' : 'No'}</td>
                <td><Button>Some action</Button></td>
            </tr>
        )
    };
    return (
        <div>
            <div className={'col-md-8'} style={{paddingLeft: '0px'}}>
                <Table responsive hover data-todos-table>
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
                </Table>
            </div>
        </div>
    )
}

TodosList.defaultProps = { todos: [] };

export default TodosList;