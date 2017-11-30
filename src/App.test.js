import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>

    );
    expect(wrapper.find('header h1').text()).toEqual('Welcome to React');
});
