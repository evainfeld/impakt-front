import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'
import colors from 'constants/colors.js';

const Initial = ({ navigation: { navigate } }) => (
  <MainLayout>
    <Text style={styles.encouregment}>
      No one can talk to your friends better than YOU.
    </Text>
    <Text style={styles.encouregment}>
      You know what's important to them.
    </Text>
    <Text style={styles.encouregment}>
      Let's convince them to support our common cause TOGETHER
    </Text>
    <Button block light full large onPress={() => navigate('ConvinceFriendsTopics')}>
      <Text>Let's do it</Text>
    </Button>
    <Text style={styles.securityNote}>We do not collect your data.</Text>
    <Text style={styles.securityNote}>What you do here is between you and your friends.</Text>
  </MainLayout>
);

Initial.navigationOptions = {
  title: 'Convince Friends',
};

const styles = StyleSheet.create({
  encouregment: {
    marginTop: 20,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  securityNote: {
    marginTop: 20,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.5,
    textTransform: 'uppercase',
  },
});

export default Initial;
