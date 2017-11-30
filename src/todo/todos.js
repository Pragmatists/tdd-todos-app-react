import React, { Component } from 'react';
import TodosList from './todosList';
import axios from 'axios';
import { Button } from 'react-bootstrap';


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
      <div className={'col-md-offset-2'}>
        <h1>My todos for today</h1>
        <div data-todos-count>Wow. I have {this.state.todos.length} todos!</div>
        <Button href={'/new'} bsStyle="primary">New todo</Button>

        <TodosList todos={this.state.todos} onMarkComplete={this.fetchData}/>
      </div>
    )
  }

}

Todos.defaultProps = { todos: [] };

export default Todos;