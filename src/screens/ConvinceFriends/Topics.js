import React from 'react';
import { Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'components/shared/LinearGradient.js';

import general from 'constants/general.js';

const TOPICS_DATA = [
  {
    title: 'Quality education for children',
    defaultMessage: 'default message for Quality education for children'
  },
  {
    title: 'Rising costs of school supplies',
    defaultMessage: 'default message for Rising costs of school supplies'
  },
  {
    title: 'Opposing the current government',
    defaultMessage: 'default message for Opposing the current government'
  },
  {
    title: 'Women rights',
    defaultMessage: 'default message for Women rights'
  },
  {
    title: 'Global warming',
    defaultMessage: 'default message for Global warming'
  },
  {
    title: 'Topic 1',
    defaultMessage: 'default message for Topic 1'
  },
  {
    title: 'Topic 2',
    defaultMessage: 'default message for Topic 2'
  },
  {
    title: 'Topic 3',
    defaultMessage: 'default message for Topic 3'
  },
  {
    title: 'Topic 4',
    defaultMessage: 'default message for Topic 4'
  },
]

const Item = ({ title }) => (
  <Text style={styles.listItem} key={title}>
    {title}
  </Text>
)

const Topics = () => (
  <LinearGradient>
    <Text style={styles.header}>
      Let's convince your friends, who value:
    </Text>
    <FlatList style={styles.listContainer}
      data={TOPICS_DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.title}
    />
  </LinearGradient>
);

Topics.navigationOptions = {
  title: 'Convince Friends - Topics',
};

const styles = StyleSheet.create({
  header: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: general.h1Size,
  },
  listContainer: {
    backgroundColor: 'transparent',
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Topics;
