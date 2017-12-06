import React from 'react';
import TodosList from "./todosList";
import axios from 'axios';
import {Button} from "react-bootstrap";

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos
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
            })
            .catch(e => e);
    };

    onNewTodo = (todo) => {
        axios.post('http://localhost:3001/todos', todo)
            .then(this.fetchData);
    };

    render() {
        return (
            <div className={'col-md-offset-2'}>
                <h1 data-todos-header>Your todos for today</h1>
                <div data-todos-count>You have {this.state.todos.length} todos!</div>
                <Button href={'/new'} bsStyle="primary">New todo</Button>
                <TodosList todos={this.state.todos}/>
            </div>
        )
    }


}

Todos.defaultProps = { todos: [] };

export default Todos;