import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const propTypes = {
  device: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['portrait', 'landscape']),
  color: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onHomeButtonClick: PropTypes.func,
};

const defaultProps = {
  orientation: 'portrait',
  color: 'black',
  children: null,
  onHomeButtonClick: null,
};

/**
 * Show a screenshot in a device frame relying on https://github.com/pixelsign/html5-device-mockups
 */
const DeviceMockup = ({
  device,
  orientation,
  color,
  children,
  onHomeButtonClick,
}) => (
  <div className="device-wrapper mx-auto">
    <div
      className="device"
      data-device={device}
      data-orientation={orientation}
      data-color={color}
    >
      <div className="screen">
        {children}
      </div>
      <Button
        className="button"
        color="link"
        onClick={onHomeButtonClick}
        onKeyPress={onHomeButtonClick}
      />
    </div>
  </div>
);

DeviceMockup.propTypes = propTypes;
DeviceMockup.defaultProps = defaultProps;

export default DeviceMockup;
