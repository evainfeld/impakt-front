import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import colors from 'constants/colors.js';
import MainLayout from 'components/layouts/MainLayout.js'
import { RegularText, HeaderYellow, TextButton } from 'components/shared/basic/index.js'

const Initial = ({ navigation: { navigate } }) => (
  <MainLayout>
    <View style={styles.container}>
      <RegularText>
        No one can talk to your friends better than YOU.
      </RegularText>
      <RegularText>
        You know what's important to them.
      </RegularText>
      <RegularText style={{ marginBottom: 40 }}>
        Let's convince them to support our common cause TOGETHER
      </RegularText>
      <TouchableOpacity style={styles.button} onPress={() => navigate('ConvinceFriendsTopics')}>
        <TextButton>Let's do it</TextButton>
      </TouchableOpacity>
      <HeaderYellow>We do not collect your data.</HeaderYellow>
      <HeaderYellow>What you do here is between you and your friends.</HeaderYellow>
    </View>
  </MainLayout>
);

Initial.navigationOptions = {
  title: 'Convince Friends',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brandLight,
    marginBottom: 60,
  },
  buttonText: {
    fontFamily: 'Exo800',
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default Initial;
