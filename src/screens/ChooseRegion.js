import React, { useEffect, useState } from 'react'
import { Picker, Platform, StyleSheet, View } from 'react-native'
import find from 'lodash/find'
import * as SecureStore from 'expo-secure-store'
// api:
import { API, graphqlOperation } from 'aws-amplify'
import { listEvent, listLocation } from 'api/queries.js'
// helpers:
import { useStore } from 'helpers/store.js'
import navigationOptions from 'helpers/navigationOptions.js'
// components:
import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, HeaderYellow , HeaderRegular} from 'components/shared/basic/index.js'
// constants:
import colors from 'constants/colors'

const ChooseRegion = (
  { navigation: { navigate, state: { params } } }
) => {
  const { dispatch } = useStore()
  const [selectedValue, setSelectedValue] = useState(false)
  const [locations, setLocations] = useState(null)

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

  useEffect(() => {
    getLocationList = async () => {
      const result = await API.graphql(graphqlOperation(listLocation, locationParams))
      setLocations(result.data.listLocation.items)
    }

    SecureStore.getItemAsync('region')
      .then((region) => {
        if (region) {
          // fetch events for region
          API.graphql(graphqlOperation(listEvent, {
            org: 'ZZ',
            sortDirection: 'ASC'
            // region: "ZZ::PL::WAW::BIELANY" // region: { beginWith: region.name } // does not work beginWith :(
          })).then((res) => {
            setEvents(res.data.listEvent.items)
          }).then(() => {
            setRegion(JSON.parse(region))
            navigate('MenuScreen')
          }).catch((res) => {
            // the response is thrown with the errors - shouldn't be like that
            if (res.data.listEvent.items) {
              setEvents(res.data.listEvent.items)
              setRegion(JSON.parse(region))
              navigate('MenuScreen')
            }
          })
        } else {
          // get location list if there is no stored region
          getLocationList()
        }
      }).catch((err) => console.log("ERROR", err))
  }, [])

  useEffect(() => {
    SecureStore.getItemAsync('region')
      .then((region) => {
        region && setSelectedValue(JSON.parse(region).name)
      })
    // get location list if the user comes to change the location:
    getLocationList = async () => {
      const result = await API.graphql(graphqlOperation(listLocation, locationParams))
      setLocations(result.data.listLocation.items)
    }

    params && params.changeCurrentRegion && getLocationList()
  }, [params])

  const locationParams = {
    // should be based on organization (TODO)
    org: 'ZZ',
    region: {
      beginsWith: 'ZZ::PL::WAW'
    },
    limit: 100,
    nextToken: null,
    sortDirection: 'ASC'
  }

  const submit = () => {
    const region = find(locations, (i) => i.name === selectedValue)
    API.graphql(graphqlOperation(listEvent, {
      org: 'ZZ',
      sortDirection: 'ASC'
      // region: region.region
      // region: {
      //   beginsWith: region.region // beginWith does not work :(
      // },
    })).then((res) => {
      setEvents(res.data.listEvent.items)
    }).then(() => {
      SecureStore.setItemAsync('region', JSON.stringify(region))
    }).then(() => {
      setRegion(region)
      navigate('MenuScreen')
    }).catch((res) => {
      // the response is thrown with the errors - shouldn't be like that
      if (res.data.listEvent.items) {
        setEvents(res.data.listEvent.items)
        SecureStore.setItemAsync('region', JSON.stringify(region))
        setRegion(region)
        navigate('MenuScreen')
      }
    })
  }

  return (
    <MainLayout>
      {locations && <View style={styles.container}>
      <HeaderYellow>{"\n"}{"\n"}</HeaderYellow>
        <Picker
          selectedValue={selectedValue}
          style={Platform.OS === 'android' ? styles.picker : {}}
          itemStyle={Platform.OS === 'ios' ? { backgroundColor: '#fff' } : {}}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item key={'not selected'} label={'not selected'} value={false} />
          {locations.map(e => <Picker.Item key={e.id} label={e.name} value={e.name} />)}
        </Picker>
        <RegularButton
          action={submit}
          content='Confirm'
          disabled={!selectedValue}
          style={styles.button}
        />
        <HeaderRegular>We do not collect your data.{"\n"}{"\n"}{"\n"} 
        Your chosen region is the only information about you we are going to save, 
        so we can make Impakt relevant to your needs.</HeaderRegular>
      </View>}
    </MainLayout>
  )
}

ChooseRegion.navigationOptions = () => navigationOptions('Choose region', false)

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: colors.white
  },
})

export default ChooseRegion
