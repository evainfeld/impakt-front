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
// api:
import { API, graphqlOperation } from 'aws-amplify'
import { notifyCoordinator } from 'api/mutations.js'

// helpers:
import { useStore } from 'helpers/store.js'
import navigationOptions from 'helpers/navigationOptions.js'

// components:
import MainLayout from 'components/layouts/MainLayout.js'
import {
  ErrorMessage,
  HeaderYellow,
  RegularButton,
  RegularText
} from 'components/shared/basic'

const ContactCoordinator = ({ navigation: { navigate } }) => {
  const [userContact, setUserContact] = useState(null)
  const [optionalMessage, setOptionalMessage] = useState(null)
  const [confirmationMessage, setConfirmationMessage] = useState(null)
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const { state: { region: { coordinatorName, coordinatorEmail } } } = useStore()

  clearFieldsValues = () => {
    setIsValid(false)
    setUserContact(null)
    setOptionalMessage(null)
  }

  onChangeText = (val, type) => {
    setConfirmationMessage(null)
    if (type === 'contact') {
      wasSubmitted ? validateContact(val) : null
      setUserContact(val)
    } else if (type === 'message') {
      setOptionalMessage(val)
    }
  }

  validateContact = contact => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[0-9]{6,12}$/g
    if (emailRegex.test(contact) || phoneRegex.test(contact)) {
      setIsValid(true)
      setErrorMessage(null)
    } else {
      setErrorMessage('Please write correct email or phone')
      setIsValid(false)
    }
    return
  }
  const notifyCoordinatorInput = {
    input: {
      currentNick: userContact,
      contactDetails: userContact,
      coordinatorEmail: coordinatorEmail,
      msg: optionalMessage || ''
    }
  }

  onSumbit = () => {
    setWasSubmitted(true)
    validateContact(userContact)
    if (isValid) {
      API.graphql(
        graphqlOperation(notifyCoordinator, notifyCoordinatorInput))
        .then((res) => {
          setConfirmationMessage('Your request was sent to the coordinator')
          clearFieldsValues()
        }).catch(err => {
          setConfirmationMessage('Something went wrong :(')
          // TODO: fix the bug => error from API: Variable 'currentNick' has coerced Null value for NonNull type 'String!
        })
    } else {
      setErrorMessage('Please write correct email or phone')
    }
  }

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.flex1}
        >
          <View style={styles.flex1}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <RegularText>W Twojej okolicy pomoże Ci</RegularText>
                <RegularText> {coordinatorName}</RegularText>
                <RegularText>
                  Jak najlepiej się z Tobą skontaktować?
                </RegularText>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <TextInput
                  style={styles.textInput}
                  placeholder='email albo telefon'
                  onChangeText={val => onChangeText(val, 'contact')}
                  value={userContact}
                />

                <TextInput
                  style={[styles.textArea, styles.textInput]}
                  multiline
                  numberOfLines={8}
                  onChangeText={val => onChangeText(val, 'message')}
                  value={optionalMessage}
                  editable
                  placeholder={`wiadomość (opcjonalnie)`}
                />
              </View>
            </TouchableWithoutFeedback>
            <RegularButton
              action={onSumbit}
              content='WYŚLIJ'
              disabled={!userContact}
              style={styles.button}
            />
            <HeaderYellow>{confirmationMessage}</HeaderYellow>
            <View style={styles.flex1} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </MainLayout>
  )
}


ContactCoordinator.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textInput: {
    padding: 10,
    backgroundColor: '#fff',
  },
  error: {
    borderColor: '#ff0000',
    borderBottomColor: 'red'
  },
  textArea: {
    flexGrow: 1,
    maxHeight: 120,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
  },
})

export default ContactCoordinator
