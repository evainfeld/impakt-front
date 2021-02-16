import React from 'react';
import CustomText from './CustomText.js';

const SmallerText = ({ children, style }) => (
  <CustomText style={{...additionalStyles, ...style}}>
    { children }
  </CustomText >
)

const additionalStyles = {
  fontFamily: "Exo200",
  textTransform: 'uppercase',
  fontSize: 16,
}

export default SmallerText;