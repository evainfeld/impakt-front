import React from 'react';
import CustomButton from './CustomButton.js';
import colors from 'constants/colors.js';

const ButtonListItem = ({ children, action, content, style }) => (
  <CustomButton
    action={action}
    color={colors.white}
    backgroundColor={colors.brandLight}
    content={content}
    style={style}
    key={content}
    textButtonStyle={{ fontFamily: "Exo200" }}
  >
    {children}
  </CustomButton>
)

export default ButtonListItem;