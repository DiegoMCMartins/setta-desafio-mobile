import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Modal, OutlinedButton} from '../../../components';
import {colors} from '../../../styles';

import DetailsItem from './DetailsItem';

// Module styles
const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: colors.DARK_GRAY,
    padding: 15,
  },
  mainTitle: {
    fontSize: 24,
    color: colors.LIGHT_YELLOW,
    fontWeight: 'bold',
    marginBottom: 36,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.LIGHT_YELLOW,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: colors.LIGHT_YELLOW,
  },
});

// Dummy Data
const dummyData = {
  name: 'Tatooine',
  climate: 'Arid',
  gravity: 1,
  population: '120000',
  terrain: 'Dessert',
};

export default function MoreInfoModal(props) {
  return (
    <Modal visible={false}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{dummyData.name}</Text>
        <DetailsItem>
          <Text style={styles.title}>População</Text>
          <Text style={styles.text}>{dummyData.population}</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.title}>Clima</Text>
          <Text style={styles.text}>{dummyData.climate}</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.title}>Terreno</Text>
          <Text style={styles.text}>{dummyData.terrain}</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.title}>Gravidade</Text>
          <Text style={styles.text}>{dummyData.gravity}</Text>
        </DetailsItem>
        <OutlinedButton title={'Fechar'} />
      </View>
    </Modal>
  );
}
