import React from 'react';
import CustomButton from './CustomButton.js';

const RegularButton = ({ children, action, content, style }) => (
  <CustomButton action={action} content={content} style={style}>
    {children}
  </CustomButton>
)

export default RegularButton;