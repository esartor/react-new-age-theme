import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import normalize from '../../services/normalize-string';
import './style.css';


const LINKS = [
  {
    title: 'Privacy',
    link: '#',
  },
  {
    title: 'Terms',
    link: '#',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },
];

/**
 * The footer presentational component
 */
const Footer = () => (
  <footer>
    <Container>
      <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
      <ul className="list-inline">
        {
          LINKS.map(({ title, link }) => (
            <li className="list-inline-item" key={normalize(title)}>
              <Link to={link}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </Container>
  </footer>
);

export default Footer;
