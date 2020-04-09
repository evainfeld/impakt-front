import React from 'react';
import { Button, Content, Container, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import navigationOptions from 'helpers/navigationOptions.js'

const GetInvolved = ({ navigation: navigate }) => {
  return (
    <Container>
      <View style={styles.container1}>
        <Button block large style={styles.button} onPress={() => navigate('ContactCoordinator', { name: 'Jane' })}>
          <Text style={styles.text} > contact nearest coordinator</Text>
        </Button>
        <Button block large style={styles.button} onPress={() => navigate('NewsEvents', { name: 'Jane' })}>
          <Text style={styles.text}  > next event in your area </Text>
        </Button>
        <Button large style={styles.button} onPress={() => navigate('LocalChat', { name: 'Jane' })}>
          <Text style={styles.text} > make friends nearby on the local chat</Text>
        </Button>
      </View>
      <View style={styles.container2}>
        {/* here how many are us in the region */}
      </View>
    </Container>
  )
}


GetInvolved.navigationOptions = navigationOptions()

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
  container1: {
    flex: 5,
    justifyContent: 'center',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 8,
    //alignItems: 'center',
  },
  container2: {
    flex: 3,
    justifyContent: 'center',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 8,
    //alignItems: 'center',
  },
});
export default GetInvolved;