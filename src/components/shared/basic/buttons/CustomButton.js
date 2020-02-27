import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from 'constants/colors.js';
import CustomText from 'components/shared/basic/CustomText.js';

const CustomButton = ({
    action,
    content,
    textButtonStyle = {},
    children,
    backgroundColor = colors.brandLight,
    color = colors.white,
    fontSize = 20,
    fontFamily = "Exo100",
    textAlign = 'center',
    marginTop = 10,
    marginBottom = 10,
    style,
}) => (
        <TouchableOpacity style={{
            backgroundColor,
            color,
            fontFamily,
            fontSize,
            marginTop,
            marginBottom,
            textAlign,
            content,
            ...style
        }} onPress={action}>
            <CustomText style={{color, ...customTextStyles, ...textButtonStyle}}>{content}</CustomText>
            {children}
        </TouchableOpacity>
    )

const customTextStyles = {
    fontFamily: "Exo700",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    textTransform: 'uppercase',
  }

export default CustomButton;