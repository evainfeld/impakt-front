import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'components/shared/LinearGradient.js';

const MainLayout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <LinearGradient>
      {children}
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainLayout;
