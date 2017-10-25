import React from 'react';
import { shallow } from 'enzyme';

import Masthead from './index';


describe('Masthead', () => {
  it('renders without crashing', () => {
    const props = {
      text: 'Text',
      buttonLabel: 'Label',
      demoScreen: 'demo.123.png',
      downloadLink: 'http://download'
    };
    shallow(<Masthead {...props} />);
  });
});
