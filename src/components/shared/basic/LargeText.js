import React from 'react';
import CustomText from './CustomText.js';
import colors from 'constants/colors.js';

const LargeText = ({ children, style }) => (
  <CustomText style={{ ...additionalStyles, ...style }}>
    {children}
  </CustomText>
)

const additionalStyles = {
    fontFamily: "Exo100",
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
}

export default LargeText;