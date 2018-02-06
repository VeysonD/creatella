import React from 'react';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './../src/components/App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Will render the App component', () => {
    expect(wrapper.length).toEqual(1);
  })
});
