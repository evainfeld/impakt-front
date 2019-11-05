import React from 'react';
import { Text, Button, Alert } from 'react-native';
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
    <Button
      title="Let's do it"
      onPress={() => navigate('ConvinceFriendsTopics')}
      color={colors.bg1}
    />
    <Text style={styles.securityNote}>We do not collect your data.</Text>
    <Text style={styles.securityNote}>What you do here is between you and your friends.</Text>
  </MainLayout>
);

Initial.navigationOptions = {
  title: 'Convince Friends',
};

const styles = StyleSheet.create({
  encouregment: {
    color: '#ffffff'
  },
  button: {
    backgroundColor: colors.bg1
  },
});

export default Initial;
