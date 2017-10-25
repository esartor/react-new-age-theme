import React from 'react';
import { shallow } from 'enzyme';

import SocialButton from './index';


describe('SocialButton', () => {
  it('renders without crashing', () => {
    shallow(<SocialButton />);
  });

  it('updates the hover state', () => {
    const wrapper = shallow(<SocialButton />);

    wrapper.simulate('mouseEnter');
    expect(wrapper.state().hover).toEqual(true);

    wrapper.simulate('mouseLeave');
    expect(wrapper.state().hover).toEqual(false);
  });
});
