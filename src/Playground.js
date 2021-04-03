import React from 'react';
import {View} from 'react-native';

import {Home, Details} from './screens';

/*
  Module created for tests
*/

const HomeTests = () => {
  return <Home />;
};

const DetailsTests = () => {
  return <Details />;
};

export default function Playground(props) {
  return <DetailsTests />;
}
