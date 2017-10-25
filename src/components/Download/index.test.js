import React from 'react';
import { shallow } from 'enzyme';

import Download from './index';


describe('Download', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'Download Now',
    };
    shallow(<Download {...props} />);
  });

  it('renders Google Play button if googlePlayDownloadLink is provided', () => {
    const props = {
      title: 'Download Now',
      googlePlayDownloadLink: 'https://download',
    };
    const wrapper = shallow(<Download {...props} />);
    expect(wrapper.find('.badge-link').length).toEqual(1);
    expect(wrapper.find('.badge-link').first().prop('href')).toEqual('https://download');
  });

  it('renders App Store button if appStoreDownloadLink is provided', () => {
    const props = {
      title: 'Download Now',
      appStoreDownloadLink: 'https://download',
    };
    const wrapper = shallow(<Download {...props} />);
    expect(wrapper.find('.badge-link').length).toEqual(1);
    expect(wrapper.find('.badge-link').first().prop('href')).toEqual('https://download');
  });

  it('does not render badges if links are not provided', () => {
    const props = {
      title: 'Download Now',
    };
    const wrapper = shallow(<Download {...props} />);
    expect(wrapper.find('.badge-link').length).toEqual(0);
  });
});
