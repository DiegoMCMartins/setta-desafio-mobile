import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors} from '../styles';

// Module styles
const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

//Auxiliar functions

export default function Button({
  title,
  onPress,
  backgroundColor = colors.YELLOW,
  pressColor = colors.LIGHT_YELLOW,
  textColor,
  style,
}) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {
          backgroundColor: pressed ? pressColor : backgroundColor,
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={[{color: textColor}, styles.title]}>{title}</Text>
    </Pressable>
  );
}
