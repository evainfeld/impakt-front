import React from 'react';
import { Text } from 'native-base';
import { StyleSheet } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'

const Messanger = (props) => {
  const topic = props.navigation.state.params.topic;

  return (
    <MainLayout>
      <Text style={styles.text}>
        {topic.title}
      </Text>
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
    marginBottom: 20,
    textTransform: 'uppercase',
  }
});

export default Messanger;
