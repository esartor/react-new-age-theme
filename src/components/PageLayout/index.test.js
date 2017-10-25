import React from 'react';
import { shallow } from 'enzyme';

import PageLayout from './index';


describe('PageLayout', () => {
  it('renders without crashing', () => {
    shallow(<PageLayout />);
  });

  it('has the app class name in the root node', () => {
    const wrapper = shallow(<PageLayout />);
    expect(wrapper.hasClass('app')).toEqual(true);
  });

  it('has the internal-page class name in the root node', () => {
    const wrapper = shallow(<PageLayout internalPage />);
    expect(wrapper.hasClass('internal-page')).toEqual(true);
  });

  it('renders the Navigation component', () => {
    const wrapper = shallow(<PageLayout internalPage />);
    expect(wrapper.find('Navigation').length).toEqual(1);
  });

  it('passes over sections to the Navigation component', () => {
    const sections = [{
      id: 'test',
      title: 'Test Title',
    }];
    const wrapper = shallow(<PageLayout sections={sections} />);
    expect(wrapper.find('Navigation').prop('sections')).toEqual(sections);
  });

  it('renders the Footer component', () => {
    const wrapper = shallow(<PageLayout internalPage />);
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});

