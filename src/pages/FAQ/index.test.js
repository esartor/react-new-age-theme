import React from 'react';
import { shallow } from 'enzyme';

import FAQPage from './index';


describe('FAQPage', () => {
  it('renders without crashing', () => {
    shallow(<FAQPage />);
  });
});
