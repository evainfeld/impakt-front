import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

// api:
import { API, graphqlOperation } from 'aws-amplify'
import { listCategory } from 'api/queries.js'

// helpers:
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'

// components:
import MainLayout from 'components/layouts/MainLayout.js'
import { ButtonListItem, LargeText } from 'components/shared/basic/index.js'

// constants:
import general from 'constants/general.js'

const categoryParams = {
  sortDirection: "DESC",
  limit: 1000,
  // this is needed but does not work:
  // region: {
  //   beginWith: "ZZ::PL"
  // },
  org: general.organizationName,
  filter: {region: {beginsWith: general.organizationName}}
}


const Item = ({ title, goToMessanger }) => (
  <ButtonListItem theme='dark' action={goToMessanger} content={title} />
)

const Topics = ({ navigation: { navigate } }) => {
  const { dispatch, state } = useStore()

  useEffect(() => {
    getTopics = async () => {
      const result = await API.graphql(graphqlOperation(listCategory, categoryParams))
      dispatch({
        type: 'setTopics',
        payload: result.data.listCategory.items
      })
    }

    getTopics()
  }, [])

  return (
    <MainLayout>
      <LargeText style={styles.header}>
        Porozmawiajmy z Twoimi znajomymi, którzy:
    </LargeText>
      <FlatList style={styles.listContainer}
        data={state.topics}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            title={item.name}
            goToMessanger={
              () => navigate('ConvinceFriendsMessanger', { topic: item })
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </MainLayout>
  )
}

Topics.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: 'transparent',
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

export default Topics
