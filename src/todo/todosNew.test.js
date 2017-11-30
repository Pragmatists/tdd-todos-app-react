import React from 'react';
import TodosNew from './todosNew';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Form } from 'react-bootstrap';
import moxios from 'moxios'

describe('todosNew component', () => {

  let wrapper;

  beforeEach(function () {
    moxios.install();
    wrapper = mount(
      <MemoryRouter>
        <TodosNew history={{ push : f => f}}/>
      </MemoryRouter>);
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('renders form', () => {
    expect(wrapper.contains(Form)).toBe(true);
  });

  it('submits new todo', (done) => {
    wrapper.find('input').simulate('change', {target: {value: 'My new todo'}});
    wrapper.find('button .btn-primary').simulate('click');

    moxios.wait(async () => {

      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      }).then(function () {
        expect(JSON.parse(request.config.data)).toEqual(jasmine.objectContaining({title: 'My new todo'}));
        done();
      })
    });

  })
});