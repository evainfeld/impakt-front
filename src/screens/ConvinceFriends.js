import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import {StyleSheet} from 'react-native';


class ConvinceFriends extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Convince Friends',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>
      jkkjjkkhj
      </Text>
        //onPress={() => navigate('Profile', {name: 'Jane'})}
    );
  }
}


export default ConvinceFriends;
