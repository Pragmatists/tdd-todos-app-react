import React, { Component } from 'react';
import TodosList from './todosList';
import TodosNew from './todosNew';
import axios from 'axios';


class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('http://localhost:3001/todos')
      .then((response) => response.data)
      .then(data => {
        this.setState({ todos: data });
      });
  };

  render() {
    return (
      <div><h1>Your todos for today</h1>
        <div data-todos-count>You have {this.state.todos.length} todos!</div>
        <TodosList todos={this.state.todos} />
        <TodosNew newTodo={this.newTodo} />
      </div>
    )
  }

  newTodo = (todo) => {
    axios.post('http://localhost:3001/todos', todo)
      .then(this.fetchData);
  }
}

Todos.defaultProps = { todos: [] };

export default Todos;