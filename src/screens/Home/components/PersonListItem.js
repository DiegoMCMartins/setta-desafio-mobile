import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../../../styles';
import {Button} from '../../../components';

// Module Styles
const styles = StyleSheet.create({
  container: {
    borderColor: colors.YELLOW,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {},
  title: {
    fontSize: 20,
    color: colors.LIGHT_YELLOW,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    color: colors.LIGHT_YELLOW,
    marginTop: 4,
  },
});

export default function PersonListItem({
  name,
  gender,
  height,
  weight,
  onMoreInfoPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.info}>{`Genero: ${gender}`}</Text>
        <Text style={styles.info}>{`Altura: ${height} cm`}</Text>
        <Text style={styles.info}>{`Peso: ${weight} Kg`}</Text>
      </View>
      <Button title={'+ Info'} onPress={onMoreInfoPress} />
    </View>
  );
}
