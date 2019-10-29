import React from 'react';

import {View} from 'react-native';
import {Title} from '../../components/layout/Typography';

const ListItem = ({name}) => {
  console.log('name', name);
  return (
    <View>
      <Title>{name}</Title>
    </View>
  );
};

export default ListItem;
