import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'
import { RegularButton, RegularText, HeaderYellow , HeaderRegular} from 'components/shared/basic/index.js'
import navigationOptions from 'helpers/navigationOptions.js'

const Initial = ({ navigation: { navigate } }) => (
  <MainLayout>
    <View style={styles.container}>
      <RegularText>
        Nikt nie potrafi rozmawiać z Twoimi znajomymi lepiej od CIEBIE.
      </RegularText>
      <RegularText>
        To Ty wiesz co jest dla nich ważne.
      </RegularText>
      <RegularText style={{ marginBottom: 40 }}>
        Razem możemy ich przekonać do wsparcia praw pracowniczych.
      </RegularText>
      <RegularButton
        action={() => navigate('ConvinceFriendsTopics')}
        content="DALEJ"
        style={styles.button}
      />
      <RegularText>Nie zbieramy Twoich danych.</RegularText>
      <RegularText>To, co tu robisz zostaje pomiędzy Twoimi znajomymi a Tobą.</RegularText>
    </View>
  </MainLayout>
);

Initial.navigationOptions = navigationOptions('Convince Friends')

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default Initial;
