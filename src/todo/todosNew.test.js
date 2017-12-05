import React from 'react';
import TodosNew from './todosNew';
import {mount} from 'enzyme';
import {Form} from 'react-bootstrap';

describe('todosNew component', () => {

    let wrapper;
    const onNewTodo = jest.fn();

    beforeEach(function () {
        wrapper = mount(
            <TodosNew onNewTodo={onNewTodo}/>
        )
    });

    it('renders form', () => {
        expect(wrapper.contains(Form)).toBe(true);
    });

    it('submits new todo', () => {
        wrapper.find('input').simulate('change', {target : {value : 'My new todo'}});
        wrapper.find('button .btn-primary').simulate('click');

        expect(onNewTodo.mock.calls).toHaveLength(1);
    })
});