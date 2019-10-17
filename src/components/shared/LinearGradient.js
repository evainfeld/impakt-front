import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../assets/colors.js';

const LinearGradientWrapper = ({
  children,
  // define own below props rendering the component or be happy with default values:
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  colorsArr = [colors.bg3, colors.bg1],
  style = styles.linearGradient
}) => (
    <LinearGradient
      start={start}
      end={end}
      colors={colorsArr}
      style={style}>

      {children}
    </LinearGradient>
  );

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default LinearGradientWrapper;
