import React, { Component } from 'react';
import TodosList from './todosList';
import TodosNew from './todosNew';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
        <Link to={'/new'}>New todo</Link>
        <TodosList todos={this.state.todos} />
      </div>
    )
  }

}

Todos.defaultProps = { todos: [] };

export default Todos;