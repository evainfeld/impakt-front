import React, { useEffect, useState } from 'react'
import sample from 'lodash/sample'
import without from 'lodash/without'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

// api:
import { API, graphqlOperation } from 'aws-amplify'
import { listPropagandaByOrg } from 'api/queries.js'

// helpers:
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'

// components:
import MainLayout from 'components/layouts/MainLayout.js'
import { HeaderRegular, DarkButton, YellowButton } from 'components/shared/basic/index.js'

const propagandaParams = {
  limit: 100,
  org: "ZZ"
}

const Messanger = (props) => {
  const { dispatch, state } = useStore()
  const topic = props.navigation.state.params.topic
  const [value, onChangeText] = useState(null)

  useEffect(() => {
    getTopics = async () => {
      const result = await API.graphql(graphqlOperation(listPropagandaByOrg, propagandaParams))
      const propagandaPerCategory = result.data.listPropagandaByOrg.items
        .filter(i => i.category === topic.name)
        .map(i => i.content)
      dispatch({
        type: 'setPropagandas',
        payload: propagandaPerCategory
      })
      onChangeText(propagandaPerCategory[0])
    }

    getTopics()
  }, [])

  const changeDefaultMsg = () => onChangeText(
    sample(
      without(state.propagandas, value)
    )
  )

  onSubmit = async () => {
    try {
      const result = await Share.share({
        message: value,
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.flex1}
        >
          <View style={styles.flex1}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <HeaderRegular style={styles.header}>
                  {topic.name}
                </HeaderRegular>
                <TextInput
                  style={styles.textInput}
                  multiline
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  maxLength={2000}
                />
              </View>
            </TouchableWithoutFeedback>
            {state.propagandas.length > 1 && (
              <DarkButton
                action={changeDefaultMsg}
                content='Pick another message'
              />
            )}
            <YellowButton
              action={onSubmit}
              content='Send'
              disabled={!value}
            />
            <View style={styles.flex1} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </MainLayout>
  )
}

Messanger.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  flex1: { flex: 1 },
  header: {
    marginTop: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInput: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top',
    maxHeight: 140,
  },
})

export default Messanger
