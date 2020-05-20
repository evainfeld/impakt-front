import React, { useState } from 'react'
import {
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

// api:
import { API, graphqlOperation } from 'aws-amplify'
import { createMessage } from 'api/mutations.js'

// components:
import { ButtonListItem } from 'components/shared/basic/index.js'

const Form = ({nickname}) => {
  const [value, setValue] = useState(null)

  let params = {
    input: {
      authorId: "6e197a31-8078-46a9-a85a-b8376420ed7b", // hardcoded
      authorNick: nickname,
      content: value,
      conversationId: "1", // hardcoded
      convoId: "1", // hardcoded
      id: "1-11190111-777005999" // hardcoded
    }
  }

  submit = () => {
    API.graphql(
      graphqlOperation(createMessage, params))
      .then(() => setValue(null))
  }

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
        action={submit}
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
