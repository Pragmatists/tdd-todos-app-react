import React, { Component } from 'react';
import axios from 'axios';

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
    const { history } = this.props;
    axios.post('http://localhost:3001/todos', this.state.todo)
      .then(() => history.push('/home'));
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

TodosNew.defaultProps = { todo: { title: '', completed: false, body: '', userId: 1 } };

export default TodosNew;