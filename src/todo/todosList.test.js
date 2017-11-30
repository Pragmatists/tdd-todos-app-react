import 'jest-enzyme';
import React from 'react';
import TodosList from './todosList';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('TodosList component', () => {

  it('renders table', () => {
    const wrapper = mount(
      <MemoryRouter>
        <TodosList />
      </MemoryRouter>
    );
    expect(wrapper.find('Table')).toBePresent();
  });

  it('renders 1 row for 1 todo', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <TodosList todos={todos}/>
      </MemoryRouter>
    );
    expect(wrapper.find('[data-todos-table] tbody tr').length).toEqual(1);
  });

  it('renders 3 rows for 3 todos', () => {
    const todos = [
      { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
      { 'id': 2, 'title': 'quis ut nam facilis et officia qui', 'completed': false },
      { 'id': 3, 'title': 'fugiat veniam minus', 'completed': false },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <TodosList todos={todos}/>
      </MemoryRouter>
    );
    expect(wrapper.find('[data-todos-table] tbody tr').length).toEqual(3);
  });
});

