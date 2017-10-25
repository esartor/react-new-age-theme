import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Navigation, { sectionShape } from '../Navigation';
import Footer from '../Footer';
import './style.css';


const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  sections: PropTypes.arrayOf(sectionShape),
  internalPage: PropTypes.bool,
};

const defaultProps = {
  children: null,
  sections: [],
  internalPage: false,
};

/**
 * A page layout component including common bits to all pages.
 */
const PageLayout = ({
  children,
  sections,
  internalPage,
}) => (
  <div className={classnames('app', { 'internal-page': internalPage })}>
    <Navigation sections={sections} />
    {children}
    <Footer />
  </div>
);

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

export default PageLayout;
