import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import HelloWorld from './HelloWorld'
const wrapper = mount(<HelloWorld />)
describe('HelloWorld Component', () => {
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Hello World')
  })
})