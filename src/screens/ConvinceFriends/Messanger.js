import React, { useState } from 'react';
import { Text } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'

const Messanger = (props) => {
  const topic = props.navigation.state.params.topic;
  const [value, onChangeText] = useState(topic.defaultMessages[0]);

  return (
    <MainLayout>
      <Text style={styles.text}>
        Let's convince your friends who value:
      </Text>
      <Text style={styles.text}>
        {topic.title}
      </Text>
      <TextInput
        style={styles.textInput}
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        maxLength={2000}
      />
    </MainLayout>
  )
}

Messanger.navigationOptions = {
  title: 'Convince Friends',
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textInput: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top'
  }
});

export default Messanger;
