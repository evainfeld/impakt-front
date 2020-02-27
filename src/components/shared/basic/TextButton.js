import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from 'constants/colors.js';

const TextButton = ({ children }) => (
  <Text style={styles.text}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: "Exo700",
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    textTransform: 'uppercase',
  }
})

export default TextButton;