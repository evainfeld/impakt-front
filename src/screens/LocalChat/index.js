import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native'

// api:
import { API, graphqlOperation } from 'aws-amplify'
import { listMessage } from 'api/queries.js'
import { onCreateMessage } from 'api/subscriptions.js'

// helpers:
import navigationOptions from 'helpers/navigationOptions.js'
import { useStore } from 'helpers/store.js'

// components:
import MainLayout from 'components/layouts/MainLayout.js'
import SetNickname from './SetNickname.js'
import Conversation from './Conversation.js'
import Form from './Form.js'

const LocalChat = ({ navigation: { state: { params } } }) => {
  const [nickname, setNickname] = useState(params.nickname)
  const { dispatch } = useStore()

  useEffect(() => {
    setNickname(params.nickname)
  }, [params])

  useEffect(() => {
    getMessageList = async () => {
      const result = await API.graphql(graphqlOperation(listMessage, messageParams))
      dispatch({
        type: 'setChatMessages',
        payload: result.data.listMessage.items
      })
    }

    getMessageList()
  }, [])

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, { convoId: "3" })
    ).subscribe({
      next: (res) => {
        const newMessage = res.value.data.onCreateMessage
        // add new message to local store
        dispatch({
          type: 'addChatMessage',
          payload: newMessage
        })
      }
    })
    // unsubscribe on unmount:
    return () => { subscription.unsubscribe() }
  }, [])

  const messageParams = {
    sortDirection: "DESC"
  }

  return (
    <MainLayout>
      {!nickname && <SetNickname setNickname={setNickname} />}
      {nickname && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.flex1}
        >
          <View style={styles.flex1}>
            <Conversation style={styles.conversationBox} />
            <Form nickname={nickname} />
          </View>
        </KeyboardAvoidingView>
      )}
    </MainLayout>
  )
}

LocalChat.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  conversationBox: { flex: 6 },
})

export default LocalChat
