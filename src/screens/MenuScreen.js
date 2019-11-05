import React, { Component } from 'react';
import { Button, Container,Content, Header,Text , Left, Body, Title, Icon, Right} from 'native-base';

import { View , StyleSheet} from 'react-native';

class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Menu Screen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container >
        <View style={styles.container}>
          <Button block light large   style={styles.button} onPress={() => navigate('GetInvolved', {name: 'Jane'})}>  
              <Text  >Get Involved</Text>
          </Button>
          <Button  block large style={styles.button} onPress={() => navigate('ConvinceFriendsInitial')}>
             <Text  >Convince Friends</Text>
          </Button>
          <Button block large style={styles.button} onPress={() => navigate('NewsEvents', {name: 'Jane'})}>
             <Text >News & Events</Text>
          </Button>
          <Button block large style={styles.button}  onPress={() => navigate('LocalChat', {name: 'Jane'})}>
             <Text > Local Chat</Text>
          </Button>
        </View>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  text:{
    textTransform:'uppercase',
    textAlign:'center',
  }, 
  button:{
     marginTop: 10,
  },
  container: {
    flex:1,
    justifyContent: 'space-around',
    borderColor:'red',
    borderStyle:'solid',
    borderWidth:8,
    //alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default MenuScreen;


