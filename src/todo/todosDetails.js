import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TodosDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo
    }
  }

  componentDidMount() {
    const { match } = this.props;
    axios.get(`http://localhost:3001/todos/${match.params.id}`)
      .then(response => response.data)
      .then(data => {
        this.setState({ todo: data });
      })
  }

  render() {
    return (
      <div>
        You definitely should do the following: <br />
        {this.state.todo.title} <br/>
        <Link to={'/home'}>Back to list</Link>
      </div>
    )
  }
}

TodosDetails.defaultProps = { todo: { title: '', completed: false, body: '', userId: 1 } };

export default TodosDetails;