import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


export const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

/**
 * A presentational compoenent to display a feature with its title, description and icon.
 */
const FeatureCard = ({
  title,
  description,
  icon,
}) => (
  <div className="feature-item">
    {icon}
    <h3>{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);

FeatureCard.propTypes = propTypes;

export default FeatureCard;
