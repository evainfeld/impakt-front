import React, { useEffect, useState } from 'react'
import { Picker, Platform, StyleSheet, View } from 'react-native'
import find from 'lodash/find'
import { useStore } from 'helpers/store.js'

import { API, graphqlOperation } from 'aws-amplify'
import { listLocation } from 'api/queries.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, HeaderYellow } from 'components/shared/basic/index.js'
import navigationOptions from 'helpers/navigationOptions.js'
import colors from 'constants/colors'

const ChooseRegion = ({ navigation: { navigate } }) => {
  const { dispatch } = useStore()
  const [selectedValue, setSelectedValue] = useState(false)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocationList = async () => {
      const result = await API.graphql(graphqlOperation(listLocation, locationParams))
      setLocations(result.data.listLocation.items)
    }

    getLocationList()
  }, [])

  const locationParams = {
    // should be based on organization (TODO)
    "org": "ZZ",
    "region": {
      "beginsWith": "ZZ::PL::WAW"
    },
    "limit": 100,
    "nextToken": null,
    "sortDirection": "ASC"
  }

  const submit = () => {
    dispatch({
      type: "setRegion",
      payload: find(locations, (i) => i.name === selectedValue)
    })
    navigate('MenuScreen')
  }

  return (
    <MainLayout>
      {locations && <View style={styles.container}>
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
          content="Confirm"
          disabled={!selectedValue}
          style={styles.button}
        />
        <HeaderYellow>We do not collect your data.</HeaderYellow>
      </View>}
    </MainLayout>
  );
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
});

export default ChooseRegion;
