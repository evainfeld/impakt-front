import React from 'react';
import HeaderRegular from './HeaderRegular.js';
import colors from 'constants/colors.js';

const HeaderYellow = ({ children, style }) => (
  <HeaderRegular style={{...additionalStyles, ...style}}>
    {children}
  </HeaderRegular>
)

const additionalStyles = {
  color: colors.yellow,
}

export default HeaderYellow;
