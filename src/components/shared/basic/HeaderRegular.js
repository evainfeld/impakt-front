import React from 'react';
import CustomText from './CustomText.js';

const HeaderRegular = ({ children, style }) => (
  <CustomText style={{...additionalStyles, ...style}}>
    { children }
  </CustomText >
)

const additionalStyles = {
  fontFamily: "Exo200",
  textTransform: 'uppercase',
}

export default HeaderRegular;