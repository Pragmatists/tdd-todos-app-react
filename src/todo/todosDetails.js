import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

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
      <div className={'col-md-offset-2 col-md-8'}>
        <Jumbotron>
          <p>I definitely should do the following:</p>
          <h1>{this.state.todo.title}</h1>
        </Jumbotron>
        <Link to={'/home'}>Back to list</Link>
      </div>
    )
  }
}

TodosDetails.defaultProps = { todo: { title: '', completed: false, body: '', userId: 1 } };

export default TodosDetails;