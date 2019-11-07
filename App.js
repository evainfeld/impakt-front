import React, { Component } from 'react';
import * as Font from 'expo-font';
import MenuScreen from './src/screens/MenuScreen';
import ContactCoordinator from './src/screens/ContactCoordinator';
import ConvinceFriendsInitial from './src/screens/ConvinceFriends/Initial';
import ConvinceFriendsTopics from './src/screens/ConvinceFriends/Topics';
import ConvinceFriendsMessanger from './src/screens/ConvinceFriends/Messanger';
import GetInvolved from './src/screens/GetInvolved';
import NewsEvents from './src/screens/NewsEvents';
import LocalChat from './src/screens/LocalChat';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Menu: { screen: MenuScreen },
  GetInvolved: { screen: GetInvolved },
  ConvinceFriendsInitial: { screen: ConvinceFriendsInitial },
  ConvinceFriendsTopics: { screen: ConvinceFriendsTopics },
  ConvinceFriendsMessanger: { screen: ConvinceFriendsMessanger },
  NewsEvents: { screen: NewsEvents },
  LocalChat: { screen: LocalChat },
  ContactCoordinator: { screen: ContactCoordinator },
});

const AppWithNav = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('./assets/Fonts/Roboto.ttf'),
      Roboto_medium: require('./assets/Fonts/Roboto_medium.ttf'),
      Ionicons: require('./assets/Fonts/Ionicons.ttf'),
    })
    this.setState({ isReady: true })
  }
  render() {
    return this.state.isReady ? (<AppWithNav />) : null
  }
}
