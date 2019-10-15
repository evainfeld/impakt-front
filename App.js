import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import Expo from 'expo';
import MenuScreen from './src/screens/MenuScreen';
import ContactCoordinator from './src/screens/ContactCoordinator';
import ConvinceFriends from './src/screens/ConvinceFriends';
import GetInvolved from './src/screens/GetInvolved';
import NewsEvents from './src/screens/NewsEvents';
import LocalChat from './src/screens/LocalChat';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Menu: { screen: MenuScreen },
  GetInvolved: { screen: GetInvolved },
  ConvinceFriends: { screen: ConvinceFriends },
  NewsEvents: { screen: NewsEvents },
  LocalChat: { screen: LocalChat },
  ContactCoordinator: { screen: ContactCoordinator },
});

const AppWithNav = createAppContainer(MainNavigator);
//export default App;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('./assets/Fonts/Roboto.ttf'),
      Roboto_medium: require('./assets/Fonts/Roboto_medium.ttf'),
      Ionicons: require('./assets/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    /*if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }*/
    return <AppWithNav />;
  }
}

/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
*/
