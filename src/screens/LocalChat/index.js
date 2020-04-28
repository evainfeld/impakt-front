import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import SetNickname from './SetNickname.js'
import Conversation from './Conversation.js'
import Form from './Form.js'

const LocalChat = ({ navigation: { state: { params } } }) => {
  const [nickname, setNickname] = useState(params.nickname)

  useEffect(() => {
    setNickname(params.nickname)
  }, [params])

  return (
    <MainLayout>
      {!nickname && <SetNickname setNickname={setNickname} />}
      {nickname && (
        <View style={styles.flex1}>
          <Conversation />
          <Form />
        </View>
      )}
    </MainLayout>
  )
}

LocalChat.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  flex1: { flex: 1 },
})

export default LocalChat
