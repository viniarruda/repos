import React from 'react';

import {SimpleText, SubTitle} from '../../components/layout/Typography';
import {Item, ItemAvatar, ItemDescription, ArrowIcon} from './styles';

const ListItem = ({item}) => {
  return (
    <Item>
      <ItemAvatar source={{uri: item.owner.avatar_url}} />
      <ItemDescription>
        <SubTitle>{item.name}</SubTitle>
        <SimpleText>{item.owner.login}</SimpleText>
      </ItemDescription>
      <ArrowIcon name="chevron-right" size={18} color="#e8e8e8" />
    </Item>
  );
};

export default ListItem;
