import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';


const propTypes = {
  element: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
};

const defaultProps = {
  element: 'div',
  color: 'black',
  icon: null,
  className: '',
  link: '#',
};

/**
 * A presentational component for a social network icon with a link
 */
class SocialButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    const {
      element: Element,
      color,
      icon,
      className,
      link,
    } = this.props;

    const style = {
      backgroundColor: color,
    };
    const hoverStyle = {
      backgroundColor: color,
      opacity: 0.9,
    };

    return (
      <Element
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={this.state.hover ? hoverStyle : style}
        className={classnames(className, 'social-button')}
      >
        <a href={link}>
          {icon}
        </a>
      </Element>
    );
  }
}

SocialButton.propTypes = propTypes;
SocialButton.defaultProps = defaultProps;

export default SocialButton;
