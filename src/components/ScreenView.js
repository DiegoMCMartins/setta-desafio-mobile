import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../styles';

// Module Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.DARK_GRAY,
  },
  titleContainer: {
    marginBottom: 36,
  },
  mainTitle: {
    fontSize: 24,
    color: colors.YELLOW,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    color: colors.LIGHT_YELLOW,
    fontWeight: 'bold',
  },
});

export default function ScreenView({children, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>{'STAR WARS \n Legends'}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
}
