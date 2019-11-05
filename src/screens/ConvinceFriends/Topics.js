import React from 'react';
import { Text, Button, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'components/shared/LinearGradient.js';

import colors from 'constants/colors.js';
const Topics = () => (
  <LinearGradient>
    <Text style={styles.encouregment}>
      Topics
    </Text>
  </LinearGradient>
);

Topics.navigationOptions = {
  title: 'Convince Friends - Topics',
};

const styles = StyleSheet.create({
  encouregment: {
    color: '#ffffff'
  },
  button: {
    backgroundColor: colors.bg1
  },
  securityNote: {
    textTransform: 'uppercase',
    color: '#ffffff'
  }
});

export default Topics;
