import React, { useState } from 'react'
import {
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import { ButtonListItem } from 'components/shared/basic/index.js'

const Form = () => {
  const [value, setValue] = useState(null)

  return (
    <View style={styles.container}>
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
      {Platform.OS === "ios" && <View style={styles.keyboardHack} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    minHeight: 200,
  },
  keyboardHack: { minHeight: 50 },
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
    minHeight: 60,
  },
})

export default Form
