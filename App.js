import React, { Component } from 'react'
import * as Font from 'expo-font'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'

// API:
import { API } from 'aws-amplify'
import config from 'api/aws-exports.js'

// helpers:
import { navigationRef } from 'helpers/rootNavigation.js'
import { StoreProvider } from 'helpers/store.js'

// screens:
import ChooseRegion from 'screens/ChooseRegion'
import MenuScreen from 'screens/MenuScreen'
import ContactCoordinator from 'screens/GetInvolved/ContactCoordinator'
import ConvinceFriendsInitial from 'screens/ConvinceFriends/Initial'
import ConvinceFriendsTopics from 'screens/ConvinceFriends/Topics'
import ConvinceFriendsMessanger from 'screens/ConvinceFriends/Messanger'
import GetInvolved from 'screens/GetInvolved/index.js'
import NewsEvents from 'screens/NewsEvents/index.js'
import LocalChat from 'screens/LocalChat/index.js'

// components:
import MenuModal from 'components/shared/MenuModal.js'
import MainLayout from 'components/layouts/MainLayout.js'

// constants
import constants from 'constants/general.js'

API.configure(config)

const MainNavigator = ({ isThatFirstVisit }) => createStackNavigator({
  Welcome: { screen: isThatFirstVisit ? ChooseRegion : MenuScreen },
  GetInvolved: { screen: GetInvolved },
  ConvinceFriendsInitial: { screen: ConvinceFriendsInitial },
  ConvinceFriendsTopics: { screen: ConvinceFriendsTopics },
  ConvinceFriendsMessanger: { screen: ConvinceFriendsMessanger },
  NewsEvents: { screen: NewsEvents },
  LocalChat: { screen: LocalChat },
  ContactCoordinator: { screen: ContactCoordinator },
  ChooseRegion: { screen: ChooseRegion },
  MenuScreen: { screen: MenuScreen },
}, { headerLayoutPreset: 'center' })

const AppWithNavFirstVisit = createAppContainer(MainNavigator({ isThatFirstVisit: true }))
const AppWithNavNextVisit = createAppContainer(MainNavigator({ isThatFirstVisit: false }))

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
      isRegionSaved: false,
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      // headers font:
      Exo: require('./assets/fonts/exo-2-400.ttf'),
      Exo700: require('./assets/fonts/exo-2-700.ttf'),
      Exo800: require('./assets/fonts/exo-2-800.ttf'),
      // regular text font:
      Exo100: require('./assets/fonts/exo-2-100.ttf'),
      Exo200: require('./assets/fonts/exo-2-200.ttf'),
      Exo300: require('./assets/fonts/exo-2-300.ttf'),
      Roboto: require('./assets/fonts/Roboto.ttf'),
      Roboto_medium: require('./assets/fonts/Roboto_medium.ttf'),
      // logo font:
      TerminaMedium: require('./assets/fonts/Termina-Medium.otf'),
      TerminaLight: require('./assets/fonts/Termina-Light.otf'),
      // icon font:
      Ionicons: require('./assets/fonts/Ionicons.ttf'),
    })
    // check region
    const region = await SecureStore.getItemAsync('region')
    if (region) { this.setState({ isRegionSaved: true }) }

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) return <MainLayout /> // TODO: loading screen

    return (
      <StoreProvider>
        {Platform.OS === 'ios' && <View style={{ height: constants.iOsSystemBarHeight, backgroundColor: '#c2c4cf' }} />}
        <MenuModal />
        {this.state.isRegionSaved ?
          <AppWithNavNextVisit ref={navigationRef} />
          : <AppWithNavFirstVisit ref={navigationRef} />}
      </StoreProvider>
    )
  }
}
