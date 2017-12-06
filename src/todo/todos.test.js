import React from 'react';
import Todos from './todos';
import {mount} from 'enzyme';
import TodosNew from "./todosNew";
import moxios from 'moxios'

describe('Todos component', () => {

    it('renders header', () => {
        const wrapper = mount(<Todos/>);
        expect(wrapper.find('[data-todos-header]').text()).toEqual('Your todos for today');
    });

    it('renders todos count for 1 todo', () => {
        const todos = [
            {'id' : 1, 'title' : 'Clean up the fridge', 'completed' : false},
        ];
        const wrapper = mount(<Todos todos={todos}/>);
        expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 1 todos!');
    });

    it('renders todos count', () => {
        const todos = [
            {'id' : 1, 'title' : 'Clean up the fridge', 'completed' : false},
            {'id' : 2, 'title' : 'quis ut nam facilis et officia qui', 'completed' : false},
            {'id' : 3, 'title' : 'fugiat veniam minus', 'completed' : false},
        ];
        const wrapper = mount(<Todos todos={todos}/>);
        expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 3 todos!');
    });

    it('renders TodosNew component', () => {
        const wrapper = mount(<Todos/>);
        expect(wrapper.find(TodosNew)).toBeTruthy();
    });

    describe('server tests', () => {

        beforeEach(function () {
            moxios.install()
        });

        afterEach(function () {
            moxios.uninstall()
        });

        it('renders todos count from server', (done) => {

            const wrapper = mount(
                <Todos todos={[]}/>
            );
            moxios.wait(async () => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status : 200,
                    response : [
                        {id : 1, title : 'Walk the first dog', completed : false},
                        {id : 2, title : 'Walk the second dog', completed : false},
                    ]
                }).then(function () {
                    expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 2 todos!');
                    done();
                })
            });

        });
    })
});

