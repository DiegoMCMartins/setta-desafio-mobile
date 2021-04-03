import React from 'react';
import {StyleSheet} from 'react-native';

import Button from './Button';
import {colors} from '../styles';

// Module styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
});

export default function OutlinedButton({
  borderColor = colors.YELLOW,
  ...props
}) {
  return (
    <Button
      {...props}
      backgroundColor={'transparent'}
      textColor={borderColor}
      style={[{borderColor}, styles.container]}
    />
  );
}
