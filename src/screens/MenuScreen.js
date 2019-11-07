import React from 'react';
import { Button, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'

const MenuScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MainLayout>
      <View style={styles.container}>
        <Button block light full large style={styles.button} onPress={() => navigate('GetInvolved', { name: 'Jane' })}>
          <Text>Get Involved</Text>
        </Button>
        <Button block light full large style={styles.button} onPress={() => navigate('ConvinceFriendsInitial')}>
          <Text>Convince Friends</Text>
        </Button>
        <Button block light full large style={styles.button} onPress={() => navigate('NewsEvents', { name: 'Jane' })}>
          <Text>News & Events</Text>
        </Button>
        <Button block light full large style={styles.button} onPress={() => navigate('LocalChat', { name: 'Jane' })}>
          <Text> Local Chat</Text>
        </Button>
      </View>
    </MainLayout>
  )
}

MenuScreen.navigationOptions = {
  title: 'Welcome to Menu Screen',
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default MenuScreen;


