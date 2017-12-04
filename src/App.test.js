import React from 'react';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('header h1').text()).toEqual('Welcome to React');
});
