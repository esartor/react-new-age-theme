import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './index';


describe('Navigation', () => {
  it('renders without crashing', () => {
    shallow(<Navigation />);
  });
});
