import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TodosList(props) {
  const markComplete = (todo) => {
    axios.put(`http://localhost:3001/todos/${todo.id}`, { ...todo, completed: true })
      .then(props.onMarkComplete);
  };
  const renderTodo = (todo) => {
    return (
      <tr key={todo.id}>
        <td><Link to={`/details/${todo.id}`}>{todo.title}</Link></td>
        <td>{todo.completed ? 'Yes' : 'No'}</td>
        <td><Button onClick={() => markComplete(todo)}>Mark complete</Button></td>
      </tr>
    )
  };
  return (
    <div>
      <div className={'col-md-8'}>
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

TodosList.defaultProps = { todos: [], onMarkComplete: f=>f };

export default TodosList;