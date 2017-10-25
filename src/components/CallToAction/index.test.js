import React from 'react';
import { shallow } from 'enzyme';

import CallToAction from './index';


describe('CallToAction', () => {
  it('renders without crashing', () => {
    const props = {
      firstLine: 'foo',
      secondLine: 'bar',
      buttonLabel: 'label',
      buttonUrl: 'url',
    };
    shallow(<CallToAction {...props} />);
  });
});
