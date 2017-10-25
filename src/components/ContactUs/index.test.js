import React from 'react';
import { shallow } from 'enzyme';

import ContactUs from './index';


describe('ContactUs', () => {
  it('renders without crashing', () => {
    shallow(<ContactUs />);
  });
});
