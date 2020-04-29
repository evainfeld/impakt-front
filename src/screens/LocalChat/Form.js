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

import { ButtonListItem } from 'components/shared/basic/index.js'

const Form = () => {
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
              <TextInput
                style={styles.textInput}
                onChangeText={text => setValue(text)}
                value={value}
                maxLength={1000}
                multiline
              />
            </View>
          </TouchableWithoutFeedback>
          <ButtonListItem
            action={() => { }}
            content={'send'}
            theme={'dark'}
          />
          <View style={styles.flex1} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

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
    justifyContent: "flex-start",
  },
  textInput: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 10,
    padding: 20,
    fontSize: 12,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top',
    maxHeight: 160,
  },
})

export default Form
