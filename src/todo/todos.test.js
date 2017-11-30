import React from 'react';
import Todos from './todos';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import moxios from 'moxios'

describe('Todos component', () => {

  it('renders header', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Todos todos={[]} />
      </MemoryRouter>);
    expect(wrapper.find('h1').text()).toEqual('My todos for today');
  });

  it('renders todos count for 1 todo', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <Todos todos={todos} />
      </MemoryRouter>);
    expect(wrapper.find('[data-todos-count]').text()).toEqual('Wow. I have 1 todos!');
  });

  it('renders todos count', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
      { 'id': 2, 'title': 'quis ut nam facilis et officia qui', 'completed': false },
      { 'id': 3, 'title': 'fugiat veniam minus', 'completed': false },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <Todos todos={todos} />
      </MemoryRouter>);
    expect(wrapper.find('[data-todos-count]').text()).toEqual('Wow. I have 3 todos!');
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
        <MemoryRouter>
          <Todos todos={[]} />
        </MemoryRouter>);

      moxios.wait(async () => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: [
            { id: 1, title: 'Walk the first dog', completed: false },
            { id: 2, title: 'Walk the second dog', completed: false },
          ]
        }).then(function () {
          expect(wrapper.find('[data-todos-count]').text()).toEqual('Wow. I have 2 todos!');
          done();
        })
      });

    });
  });


});

