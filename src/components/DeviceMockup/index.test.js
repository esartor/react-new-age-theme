import React from 'react';
import { shallow } from 'enzyme';

import DeviceMockup from './index';


describe('DeviceMockup', () => {
  it('renders without crashing', () => {
    const props = {
      device: 'iPhone6',
    };
    shallow(<DeviceMockup {...props} />);
  });

  it('has the device-wrapper class name in the root node', () => {
    const props = {
      device: 'iPhone6',
    };
    const wrapper = shallow(<DeviceMockup {...props} />);
    expect(wrapper.hasClass('device-wrapper')).toEqual(true);
  });
});
