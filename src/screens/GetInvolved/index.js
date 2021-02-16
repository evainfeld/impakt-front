import React from 'react'
import { StyleSheet, View , Image} from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'
import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'
import MainLayout from 'components/layouts/MainLayout.js'


const GetInvolved = ({ navigation: { navigate } }) => {
  const { state } = useStore()
  return (
    <MainLayout>
      <View style={styles.container1}>
      <HeaderRegular style={styles.info}>There {state.numberOfUsers > 1 ? 'are' : 'is'} at least {state.numberOfUsers} of us in:</HeaderRegular>
      <HeaderRegular style={styles.info}>{state.region.name}{"\n"}</HeaderRegular>

        <ButtonListItem
          theme='dark'
          action={() => navigate('ContactCoordinator')}
          content={'contact the nearest coordinator'}
        />
        <ButtonListItem
          theme='dark'
          action={() => navigate('NewsEvents')}
          content={'next event in your area'}
        />
        <ButtonListItem
          theme='dark'
          action={() => navigate('LocalChat', { nickname: null })}
          content={'make friends nearby on the local chat'}
        />
      </View>
      <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,}}>
      <Image
        source={require('assets/images/logo_name_s.png')}
      />
      </View>

    </MainLayout>
  )
}


GetInvolved.navigationOptions = navigationOptions('')

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
