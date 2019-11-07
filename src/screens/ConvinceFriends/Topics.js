import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import MainLayout from 'components/layouts/MainLayout.js'

import general from 'constants/general.js';

const TOPICS_DATA = [
  {
    title: 'Quality education for children',
    defaultMessages: ['default message for Quality education for children', 'another default message']
  },
  {
    title: 'Rising costs of school supplies',
    defaultMessages: ['default message for Rising costs of school supplies', 'another default message']
  },
  {
    title: 'Opposing the current government',
    defaultMessages: ['default message for Opposing the current government', 'another default message']
  },
  {
    title: 'Women rights',
    defaultMessages: ['default message for Women rights', 'another default message']
  },
  {
    title: 'Global warming',
    defaultMessages: ['default message for Global warming', 'another default message']
  },
  {
    title: 'Topic 1',
    defaultMessages: ['default message for Topic 1', 'another default message']
  },
  {
    title: 'Topic 2',
    defaultMessages: ['default message for Topic 2']
  },
  {
    title: 'Topic 3',
    defaultMessages: ['default message for Topic 3']
  },
  {
    title: 'Topic 4',
    defaultMessages: ['default message for Topic 4']
  },
]

const Item = ({ title, goToMessanger }) => (
  <TouchableOpacity onPress={goToMessanger}>
    <Text style={styles.listItem} key={title} >
      {title}
    </Text >
  </TouchableOpacity>
)

const Topics = ({ navigation: { navigate } }) => (
  <MainLayout>
    <Text style={styles.header}>
      Let's convince your friends, who value:
    </Text>
    <FlatList style={styles.listContainer}
      data={TOPICS_DATA}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          goToMessanger={
            () => navigate('ConvinceFriendsMessanger', { topic: item })
          }
        />
      )}
      keyExtractor={item => item.title}
    />
  </MainLayout>
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
