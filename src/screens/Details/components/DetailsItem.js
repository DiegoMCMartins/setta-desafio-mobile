import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../../../styles';

// Module styles
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: colors.YELLOW,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    alignItems: 'flex-end',
    marginBottom: 36,
  },
});

export default function DetailsItem({children}) {
  return <View style={styles.container}>{children}</View>;
}
