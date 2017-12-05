import React from 'react';
import TodosList from "./todosList";
import TodosNew from "./todosNew";

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos
        }
    }

    onNewTodo = (todo) => {
      this.setState({
          todos: [...this.state.todos, todo]
      })  ;
    };

    render() {
        return (
            <div className={'col-md-offset-2'}>
                <h1 data-todos-header>Your todos for today</h1>
                <div data-todos-count>You have {this.state.todos.length} todos!</div>
                <TodosNew onNewTodo={this.onNewTodo}/>
                <TodosList todos={this.state.todos}/>
            </div>
        )
    }


}

Todos.defaultProps = { todos: [] };

export default Todos;