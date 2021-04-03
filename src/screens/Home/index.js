import React from 'react';
// import {View} from 'react-native';

import {ScreenView} from '../../components';
import {PersonList} from './components';

export default function Home(props) {
  return (
    <ScreenView title={'Personagens'}>
      <PersonList />
    </ScreenView>
  );
}
