import React from 'react';
import { shallow } from 'enzyme';

import Features from './index';


describe('Features', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'Features',
      demoScreen: 'demo.123.png',
      features: [],
    };
    shallow(<Features {...props} />);
  });
});
