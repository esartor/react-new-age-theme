import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import SocialButton from '../SocialButton';
import Icon from '../Icon';
import './style.css';


const socialNetworkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
});

const propTypes = {
  socialNetworks: PropTypes.arrayOf(socialNetworkShape),
};

const defaultProps = {
  socialNetworks: [],
};

/**
 * Contact us section including links to social networks
 */
const ContactUs = ({ socialNetworks }) => (
  <section className="contact bg-primary" id="contact">
    <Container>
      <h2>
        We <Icon family="fa" name="heart" />new friends!
      </h2>
      <ul className="list-inline list-social">
        {
          socialNetworks.map(({ id, ...props }) => (
            <SocialButton
              {...props}
              element="li"
              className="list-inline-item"
              key={id}
            />
          ))
        }
      </ul>
    </Container>
  </section>
);

ContactUs.propTypes = propTypes;
ContactUs.defaultProps = defaultProps;

export default ContactUs;
