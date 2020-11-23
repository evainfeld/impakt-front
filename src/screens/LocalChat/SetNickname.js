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

import { HeaderRegular, HeaderYellow, ButtonListItem } from 'components/shared/basic/index.js'

const SetNickName = ({ setNickname }) => {
  const [value, setValue] = useState(null)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.flex1}
      >
        <View style={styles.flex1}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <HeaderRegular style={styles.header}>
                Wybierz pseudonim:
                </HeaderRegular>
              <TextInput
                style={styles.textInput}
                onChangeText={text => setValue(text)}
                value={value}
                maxLength={20}
              />
            </View>
          </TouchableWithoutFeedback>
          <ButtonListItem
            action={() => setNickname(value)}
            content={'wejdź na czat'}
            theme={'dark'}
          />
          <HeaderRegular>IMPAKT nie zapamietuje Twojego pseudonimu.</HeaderRegular>
          <HeaderRegular>Jeżeli ktoś uzyska dostęp po Twojego telefonu, nie dowie się co w nim robiłeś/aś.</HeaderRegular>
          <HeaderRegular>Dlatego IMPAKT prosi o wpisanie pseudonimu za każdym razem, kiedy otworzysz aplikację.</HeaderRegular>
          <View style={styles.flex1} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

SetNickName.navigationOptions = navigationOptions()

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
    maxHeight: 60,
  },
})

export default SetNickName
