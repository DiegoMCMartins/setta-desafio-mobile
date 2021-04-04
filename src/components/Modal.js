import React from 'react';
import {View, Modal as RNModal, StyleSheet} from 'react-native';

import {colors} from '../styles';

// Module style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK_30PERC_OPACITY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Modify animetion when modal appears. The background will fade after modal slide.

export default function Modal({children, onRequestClose, visible, style}) {
  return (
    <RNModal
      animationType={'slide'}
      onRequestClose={onRequestClose}
      transparent={true}
      visible={visible}>
      <View
        style={[styles.container, style]}
        onStartShouldSetResponder={onRequestClose}>
        <View onStartShouldSetResponder={() => true}>{children}</View>
      </View>
    </RNModal>
  );
}
