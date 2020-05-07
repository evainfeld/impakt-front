import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { format } from 'date-fns'
import orderBy from 'lodash/orderBy'

// helpers:
import { useStore } from 'helpers/store.js'

// components:
import { CustomText } from 'components/shared/basic/index.js'

// constants:
import colors from 'constants/colors.js'

const ListItem = ({ item }) => (
  <View key={item.id}>
    <View style={styles.authorContainer}>
      <CustomText style={{ ...styles.chatText, ...styles.textBold }}>{format(new Date(item.createdAt), '[pp]')}</CustomText>
      <CustomText style={{ ...styles.chatText, ...styles.textBold }}>{item.authorNick}</CustomText>
    </View>
    <CustomText style={styles.chatText}>{item.content}</CustomText>
  </View>
)

const Conversation = ({ style }) => {
  const { state } = useStore()
  const chatMessages = orderBy(state.chatMessages, ['createdAt'], ['desc'])

  return (
    <View style={style}>
      <View style={styles.headerContainer}>
        <CustomText style={styles.headerText}>There are </CustomText>
        <CustomText style={{ ...styles.headerText, ...styles.headerCounter }}> 17 </CustomText>
        <CustomText style={styles.headerText}> of us here</CustomText>
      </View>
      <FlatList
        data={chatMessages}
        renderItem={({ item }) => <ListItem item={item} />}
        style={styles.listContainer}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.brandLight,
    fontFamily: 'Exo',
  },
  headerCounter: {
    color: colors.alarmRed,
  },
  listContainer: {
    backgroundColor: '#fff',
    padding: 5,
  },
  authorContainer: {
    flexDirection: 'row',
  },
  chatText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Exo',
    textAlign: 'left',
    marginTop: 0,
  },
  textBold: {
    fontFamily: 'Exo800',
    marginRight: 5,
    marginBottom: 0,
  },
})

export default Conversation