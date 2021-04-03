import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import {ScreenView, Button} from '../../components';
import {DetailsItem} from './components';

import {colors} from '../../styles';

// Module styles
const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 16,
    color: colors.LIGHT_YELLOW,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: colors.LIGHT_YELLOW,
  },
});

export default function Details(props) {
  return (
    <ScreenView title={'Luke Skywalker'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailsItem>
          <Text style={styles.itemTitle}>Genero</Text>
          <Text style={styles.itemText}>Masculino</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.itemTitle}>Altura</Text>
          <Text style={styles.itemText}>172 cm</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.itemTitle}>Peso</Text>
          <Text style={styles.itemText}>77 Kg</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.itemTitle}>Ano de Aniversário</Text>
          <Text style={styles.itemText}>19BBY</Text>
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.itemTitle}>Planeta Natal</Text>
          <Button title={'Saiba Mais'} />
        </DetailsItem>
        <DetailsItem>
          <Text style={styles.itemTitle}>Espécie</Text>
          <Button title={'Saiba Mais'} />
        </DetailsItem>
      </ScrollView>
    </ScreenView>
  );
}
