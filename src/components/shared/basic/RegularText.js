import React from 'react';
import CustomText from './CustomText.js';

const RegularText = ({ children, style }) => (
  <CustomText style={style}>
    {children}
  </CustomText>
)

export default RegularText;