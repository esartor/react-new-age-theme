import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const propTypes = {
  family: PropTypes.oneOf(['fa', 'simple']).isRequired,
  name: PropTypes.string.isRequired,
  // size: PropTypes.oneOf(['small', 'normal', 'big']),
};

/**
 * An presentational component to render an icon from either FontAwesome or simple-line-icons
 */
const Icon = ({
  family,
  name,
  // size,
}) => {
  const familyToClassName = {
    fa: classnames('fa', `fa-${name}`),
    simple: classnames(`icon-${name}`),
  };
  return <i className={familyToClassName[family]} />;
};

Icon.propTypes = propTypes;

export default Icon;
