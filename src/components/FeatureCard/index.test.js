import React from 'react';
import { shallow } from 'enzyme';

import FeatureCard from './index';


describe('FeatureCard', () => {
  it('renders without crashing', () => {
    const props = {
      icon: <i />,
      title: 'Feature',
      description: 'So cool',
    };
    shallow(<FeatureCard {...props} />);
  });
});
