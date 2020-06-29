import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import * as SecureStore from 'expo-secure-store'

// api:
import { API, graphqlOperation } from 'aws-amplify'
import { listEvent } from 'api/queries.js'

// helpers:
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'

// components:
import MainLayout from 'components/layouts/MainLayout.js'
import { ButtonListItem, HeaderRegular } from 'components/shared/basic/index.js'

const MenuScreen = ({ navigation }) => {
  const { navigate } = navigation
  const { dispatch, state: { region } } = useStore()

  setEvents = (events) => (
    dispatch({
      type: 'setEvents',
      payload: events
    })
  )

  setRegion = (region) => (
    dispatch({
      type: 'setRegion',
      payload: region
    })
  )

  eventParams = region => {
    return {
      filter: {
        region: {
          beginsWith: region
        }
      },
      limit: 1000
    }
  }

  useEffect(() => {
    // fetch events for region
    fetchEvents = (obj) => API.graphql(graphqlOperation(listEvent, eventParams(obj.region)))
      .then((res) => {
        if (res.data.listEvent.items) {
          setEvents(res.data.listEvent.items)
        }
      }).catch((res) => {
        // the response is thrown with the errors - shouldn't be like that
        if (res.data.listEvent.items) {
          setEvents(res.data.listEvent.items)
        }
      })
    if (region) {
      fetchEvents(region)
    } else {
      SecureStore.getItemAsync('region')
        .then((res) => {
          setRegion(JSON.parse(res))
          fetchEvents(JSON.parse(res))
        }).catch((err) => console.log("ERROR", err))
    }
  }, [])

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


