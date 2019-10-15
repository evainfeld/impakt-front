import React, { Component } from 'react';
import { Button, Container, Text } from 'native-base';
import {StyleSheet} from 'react-native';

class NewsEvents extends React.Component {
  static navigationOptions = {
    title: 'Welcome to ProfileScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="this is profile screen"
        //onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

export default NewsEvents;
