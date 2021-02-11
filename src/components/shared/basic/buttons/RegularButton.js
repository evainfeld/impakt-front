import React from 'react';
import CustomButton from './CustomButton.js';
import colors from 'constants/colors.js';
import LinearGradient from 'components/shared/LinearGradient.js';

const RegularButton = ({ children, action, content, disabled, style }) => (
  <CustomButton
    action={action}
    content={content}
    disabled={disabled}
    style={style}
    backgroundColor={colors.brandlight}
  >
    {children}
  </CustomButton>
)

export default RegularButton;