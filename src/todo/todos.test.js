import React from 'react';
import Todos from './todos';
import { mount } from 'enzyme';

describe('Todos component', () => {

  it('renders header', () => {
    const wrapper = mount(<Todos />);
    expect(wrapper.find('h1').text()).toEqual('Your todos for today');
  });

  it('renders todos count for 1 todo', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
    ];
    const wrapper = mount(<Todos todos={todos} />);
    expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 1 todos!');
  });

  it('renders todos count', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
      { 'id': 2, 'title': 'quis ut nam facilis et officia qui', 'completed': false },
      { 'id': 3, 'title': 'fugiat veniam minus', 'completed': false },
    ];
    const wrapper = mount(<Todos todos={todos} />);
    expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 3 todos!');
  });
});

