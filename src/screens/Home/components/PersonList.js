import React from 'react';
import {FlatList} from 'react-native';

import PersonListItem from './PersonListItem';

// Dummy List
const dummyData = [
  {
    name: 'Luke SkyWalker',
    gender: 'male',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    homeworld: 'https://swapi.dev/api/planets/1/',
    species: 'https://swapi.dev/api/species/1/',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'Luke SkyWalker',
    gender: 'male',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    homeworld: 'https://swapi.dev/api/planets/1/',
    species: 'https://swapi.dev/api/species/1/',
    url: 'https://swapi.dev/api/people/2/',
  },
  {
    name: 'Luke SkyWalker',
    gender: 'male',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    homeworld: 'https://swapi.dev/api/planets/1/',
    species: 'https://swapi.dev/api/species/1/',
    url: 'https://swapi.dev/api/people/3/',
  },
  {
    name: 'Luke SkyWalker',
    gender: 'male',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    homeworld: 'https://swapi.dev/api/planets/1/',
    species: 'https://swapi.dev/api/species/1/',
    url: 'https://swapi.dev/api/people/4/',
  },
];

// Auxiliar functions
const renderPersonListItem = ({item: person}) => {
  return (
    <PersonListItem
      name={person.name}
      gender={person.gender}
      height={person.height}
      weight={person.mass}
    />
  );
};

export default function PersonList(props) {
  return (
    <FlatList
      data={dummyData}
      renderItem={renderPersonListItem}
      keyExtractor={item => item.url}
      showsVerticalScrollIndicator={false}
    />
  );
}
