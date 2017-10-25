import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import normalize from '../../services/normalize-string';
import FeatureCard, { propTypes as featurePropTypes } from '../FeatureCard';
import DeviceMockup from '../DeviceMockup';
import './style.css';


const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape(featurePropTypes)).isRequired,
  demoScreen: PropTypes.string.isRequired,
};

const defaultProps = {
  subtitle: '',
};

/**
 * A component for a features section.
 */
const Features = ({
  title,
  subtitle,
  features,
  demoScreen,
}) => {
  // Group features in pairs to display each pair in a row
  const pairs = features.reduce((list, value, index, array) => {
    if (index % 2 === 0) {
      list.push(array.slice(index, index + 2));
    }
    return list;
  }, []);

  return (
    <section className="features" id="features">
      <Container>
        <div className="section-heading text-center">
          <h2>{title}</h2>
          <p className="text-muted">{subtitle}</p>
          <hr />
        </div>
        <Row>
          <Col lg="4" xs="12" className="my-auto">
            <DeviceMockup
              device="iPhone6Plus"
              orientation="portrait"
              color="white"
            >
              <img src={demoScreen} className="img-fluid" alt="" />
            </DeviceMockup>
          </Col>
          <Col lg="8" xs="12" className="my-auto">
            <Container fluid>
              {
                pairs.map(pair => (
                  <Row key={normalize(pair.map(item => item.title).join('-'))}>
                    {
                      pair.map(props => (
                        <div className="col-lg-6" key={normalize(props.title)}>
                          <FeatureCard {...props} />
                        </div>
                      ))
                    }
                  </Row>
                ))
              }
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
