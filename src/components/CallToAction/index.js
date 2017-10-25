import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import './style.css';


const propTypes = {
  firstLine: PropTypes.string.isRequired,
  secondLine: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

/**
 * A presentational component for a 'call to action' section
 */
const CallToAction = ({
  firstLine,
  secondLine,
  buttonLabel,
  buttonUrl,
}) => (
  <section className="cta">
    <div className="cta-content">
      <Container>
        <h2>{firstLine}<br />{secondLine}</h2>
        <a href={buttonUrl} className="btn btn-outline btn-xl">
          {buttonLabel}
        </a>
      </Container>
    </div>
    <div className="overlay" />
  </section>
);

CallToAction.propTypes = propTypes;

export default CallToAction;
