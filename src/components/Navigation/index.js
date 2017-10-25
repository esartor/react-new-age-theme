import throttle from 'lodash.throttle';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './style.css';


export const sectionShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

const propTypes = {
  sections: PropTypes.arrayOf(sectionShape),
};

const defaultProps = {
  sections: [],
};

/**
 * A responsive navbar component for an in-page navigation menu and logo.
 */
class Navigation extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      sectionNodes: [], // Cached section nodes data
      currentSection: null, // Current section, used to highlight the current menu entry
      sticky: false, // Tells if the navbar should be marked as sticky and gain special styles
      isOpen: false, // For mobile support, tells if the navbar menu is open
    };

    // Methods binding
    this.onScroll = this.onScroll.bind(this);
    this.toggle = this.toggle.bind(this);
    this.cacheSectionNodes = this.cacheSectionNodes.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100));
  }

  onScroll() {
    // Update the current section and the sticky state prop
    let currentSection = null;
    const position = (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const isScrollBottom = window.innerHeight + position >= document.body.scrollHeight;

    this.cacheSectionNodes();
    this.state.sectionNodes.forEach(({ id, position: nodePosition }) => {
      if (position >= nodePosition || isScrollBottom) {
        currentSection = id;
      }
    });

    this.setState({
      ...this.state,
      currentSection,
      sticky: position > 100,
    });
  }

  cacheSectionNodes() {
    // If section nodes were calculated, do nothing. Otherwise find the sections in the DOM and
    // save its data in the state.
    if (this.state.sectionNodes.length > 0) return;
    this.setState({
      ...this.state,
      sectionNodes: this.props.sections.map(({ id }) => {
        const { offsetTop } = document.getElementById(id) || {};
        return { id, position: offsetTop };
      }),
    });
  }

  toggle() {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { sticky, currentSection } = this.state;

    return (
      <Navbar
        light
        fixed="top"
        expand="lg"
        className={classnames('navigation', { 'navbar-shrink': sticky })}
      >
        <Container>
          <Link to="/" className="navbar-brand">
            Start Bootstrap
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav ml-auto">
              {
                this.props.sections.map(({ id, title }) => (
                  <NavItem key={id}>
                    <NavLink
                      href={`#${id}`}
                      className={classnames('nav-link', { active: currentSection === id })}
                    >
                      {title}
                    </NavLink>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
