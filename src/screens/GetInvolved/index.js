import React from 'react'
import { StyleSheet, View } from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'
import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'
import MainLayout from 'components/layouts/MainLayout.js'


const GetInvolved = ({ navigation: { navigate } }) => {
  const { state } = useStore()
  return (
    <MainLayout>
      <View style={styles.container1}>
        <ButtonListItem
          theme='dark'
          action={() => navigate('ContactCoordinator')}
          content={'skontaktuj się z przedstawicielem związku'}
        />
        <ButtonListItem
          theme='dark'
          action={() => navigate('NewsEvents')}
          content={'najbliższe wydarzenie blisko ciebie'}
        />
        <ButtonListItem
          theme='dark'
          action={() => navigate('LocalChat', { nickname: null })}
          content={'poznaj innych na czacie'}
        />
      </View>
      <View style={styles.container2}>
        <HeaderRegular style={styles.info}> Jest nas coraz więcej w:</HeaderRegular>
        <HeaderRegular style={styles.infoBig}>{state.region.name}</HeaderRegular>
      </View>
    </MainLayout>
  )
}

GetInvolved.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container1: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  info: {
  },
  infoBig: {
    fontSize: 24,
  },
});
export default GetInvolved;
