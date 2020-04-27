import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import navigationOptions from 'helpers/navigationOptions.js'

import MainLayout from 'components/layouts/MainLayout.js'
import { HeaderRegular, DarkButton, YellowButton } from 'components/shared/basic/index.js'
import SetNickname from './SetNickname.js'

const LocalChat = (props) => {
  const [nickname, setNickname] = useState(null)
  return (
    <MainLayout>
      <SetNickname nickname={nickname} setNickname={setNickname} />
    </MainLayout>
  )
}

LocalChat.navigationOptions = navigationOptions()

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
    justifyContent: "flex-end",
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

export default LocalChat
