import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

import PropTypes from 'prop-types';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default CustomButton;