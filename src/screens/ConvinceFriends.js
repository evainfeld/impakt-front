import React, { Component } from 'react';
//import { Button } from 'react-native';
import {StyleSheet} from 'react-native';
import { Button, Container, Text ,Header, Left, Body, Title, Icon, Right} from 'native-base';

class ConvinceFriends extends React.Component {
  static navigationOptions = {
    title: 'Welcome to ProfileScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
       <Container>
      
        //onPress={() => navigate('Profile', {name: 'Jane'})}
       </Container>
    );
  }
}
/*
ConvinceFriends.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack(null)}>
          <Icon name="return" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});*/

export default ConvinceFriends;
