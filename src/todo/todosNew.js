import React, { Component } from 'react';

class TodosNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo
    }
  }

  onChange = (event) => {
    this.setState({
      todo: {
        ...this.state.todo,
        title: event.target.value
      }
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.newTodo(this.state.todo);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>What should I do ?</label>
          <input type="text" value={this.state.todo.title} onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

TodosNew.defaultProps = { todo: { title: '', completed: false, body: '', userId: 1 }, newTodo: f => f };

export default TodosNew;