import React, { Component } from 'react';
import TodosList from './todosList';
import TodosNew from './todosNew';

// function Todos(props) {
//   return (
//     <div><h1>Your todos for today</h1>
//       <div data-todos-count>You have {props.todos.length} todos!</div>
//       <TodosList todos={props.todos} />
//       <TodosNew newTodo={(todo) => {props.todos.push(todo); console.log(props.todos)}}/>
//     </div>
//   )
// }

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    }
  }

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
    this.setState({todos: [...this.state.todos, todo]})
  }
}

Todos.defaultProps = { todos: [] };

export default Todos;