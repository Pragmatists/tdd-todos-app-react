import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

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
        const { onNewTodo } = this.props;
        onNewTodo(this.state.todo);
    };

    render() {
        return (
            <div className={'col-md-8'}>
                <h1>Hey, let's do something new</h1>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalTodo">
                        <Col componentClass={ControlLabel} sm={2}>
                            What should I do ?
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Todo" value={this.state.todo.title} onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <Button type="submit" bsStyle="primary" onClick={this.onSubmit} data-submit-new>Submit</Button>

                </Form>
            </div>
        )
    }
}

TodosNew.defaultProps = { todo: { title: '', completed: false, body: '', userId: 1 }, onNewTodo: f => f};

export default TodosNew;