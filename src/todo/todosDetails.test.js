import React from 'react';
import { Link, MemoryRouter, Route } from 'react-router-dom';
import TodosDetails from './todosDetails';
import { mount } from 'enzyme';
import moxios from 'moxios'

describe('todosDetails', () => {

    let wrapper;

    describe('without server', () => {
        beforeEach(() => {
            wrapper = mount(
                <MemoryRouter initialEntries={[{ pathname: '/details/1' }]}>
                    <Route exact path="/details/:id" render={(props) => (
                        <TodosDetails todo={{ title: 'Walk the dog' }} {...props} />
                    )} />

                </MemoryRouter>);
        });

        it('renders title', () => {

            expect(wrapper.find('h1').text()).toEqual('Walk the dog');

        });

        it('renders back to list link', () => {
            expect(wrapper.find(Link).text()).toEqual('Back to list');
        });
    });

    describe('from server', () => {
        beforeEach(() => {
            moxios.install();
            wrapper = mount(
                <MemoryRouter initialEntries={[ {pathname: '/details/1'}]}>
                    <Route exact path="/details/:id" render={(props) => (
                        <TodosDetails todo={{ title: 'Walk the dog' }} {...props}/>
                    )}/>

                </MemoryRouter>);
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('renders details from server', (done) => {

            moxios.wait(async () => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: { id: 1, title: 'Walk the first dog', completed: false }
                }).then(function () {
                    expect(wrapper.find('h1').text()).toEqual('Walk the first dog');
                    done();
                })
            });

        });
    })
});