import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import googlePlayBadge from './images/google-play-badge.svg';
import appStoreBadge from './images/app-store-badge.svg';
import './style.css';


const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  googlePlayDownloadLink: PropTypes.string,
  appStoreDownloadLink: PropTypes.string,
};

const defaultProps = {
  subtitle: '',
  googlePlayDownloadLink: null,
  appStoreDownloadLink: null,
};

/**
 * A presentational component with download links to the App and Play stores.
 */
const Download = ({
  title,
  subtitle,
  googlePlayDownloadLink,
  appStoreDownloadLink,
}) => (
  <section className="download bg-primary text-center" id="download">
    <Container>
      <Row>
        <Col md="8" className="mx-auto">
          <h2 className="section-heading">{title}</h2>
          <p>{subtitle}</p>
          <div className="badges">
            {
              googlePlayDownloadLink && (
                <a className="badge-link" href={googlePlayDownloadLink}>
                  <img src={googlePlayBadge} alt="" />
                </a>
              )
            }
            {
              appStoreDownloadLink && (
                <a className="badge-link" href={appStoreDownloadLink}>
                  <img src={appStoreBadge} alt="" />
                </a>
              )
            }
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

export default Download;
