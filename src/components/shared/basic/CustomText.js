import React from 'react';
import { Text } from 'react-native';
import colors from 'constants/colors.js';

const CustomText = ({
  children,
  color = colors.white,
  fontSize = 20,
  fontFamily = "Exo100",
  textAlign = 'center',
  marginTop = 10,
  marginBottom = 10,
  style,
}) => (
    <Text style={{
      color,
      fontFamily,
      fontSize,
      marginTop,
      marginBottom,
      textAlign,
      ...style
    }}>
      {children}
    </Text>
  )

export default CustomText;