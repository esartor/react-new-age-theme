import React from 'react';
import { shallow } from 'enzyme';

import Icon from './index';


describe('Icon', () => {
  it('renders without crashing', () => {
    const props = {
      family: 'simple',
      name: 'screen-smartphone',
    };
    shallow(<Icon {...props} />);
  });

  it('has the FontAwesome classes', () => {
    const props = {
      family: 'fa',
      name: 'twitter',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('i').hasClass('fa')).toEqual(true);
    expect(wrapper.find('i').hasClass('fa-twitter')).toEqual(true);
  });

  it('has the simple-line-icons classes', () => {
    const props = {
      family: 'simple',
      name: 'screen-smartphone',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('i').hasClass('icon-screen-smartphone')).toEqual(true);
  });
});
