import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'
import MainLayout from 'components/layouts/MainLayout.js'
import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'

const MenuScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MainLayout>
      <View style={styles.container1}>
        <ButtonListItem
        theme='dark'
          action={() => navigate('GetInvolved')}
          content={'Get Involved'}
        />
        <ButtonListItem
        theme='dark'
          action={() => navigate('ConvinceFriendsInitial')}
          content={'Convince Friends'}
        />
        <ButtonListItem
        theme='dark'
          action={() => navigate('NewsEvents')}
          content={'News & Events'}
        />
        <ButtonListItem
        theme='dark'
          action={() => navigate('LocalChat', { nickname: null })}
          content={'Local Chat'}
        />
      </View>
      <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,}}>
      <Image
        source={require('assets/images/logo_name_s.png')}
      />
      </View>
    </MainLayout>
  )
}

MenuScreen.navigationOptions = navigationOptions('', false)

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default MenuScreen;


