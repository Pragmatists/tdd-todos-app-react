import React, { Component } from 'react';

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        };
    }

    render() {
        return (
            <div>
                <h1>Your todos for today</h1>
                <div data-todos-count>
                    You have {this.state.todos.length} todos!
                </div>
            </div>
        );
    }
}

Todos.defaultProps = {
    todos: [
        { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
        { 'id': 2, 'title': 'quis ut nam facilis et officia qui', 'completed': false },
        { 'id': 3, 'title': 'fugiat veniam minus', 'completed': false },
    ]
};

export default Todos;
