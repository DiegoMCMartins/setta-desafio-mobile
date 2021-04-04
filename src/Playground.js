import React from 'react';
import {View} from 'react-native';

import {Home, Details} from './screens';

// Test for api endpoints
import * as api from './services/api';

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
