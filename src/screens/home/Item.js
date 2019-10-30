import React from 'react';

import {TouchableOpacity} from 'react-native';
import {SimpleText, SubTitle} from '../../components/layout/Typography';
import {
  Item,
  ItemAvatar,
  ItemDescription,
  ItemDescriptionContent,
  ArrowIcon,
} from './styles';

const ListItem = ({item, navigate}) => {
  const handleNavigate = () => {
    navigate('Details', {url: item.html_url});
  };

  return (
    <TouchableOpacity onPress={() => handleNavigate()}>
      <Item>
        <ItemAvatar source={{uri: item.owner.avatar_url}} />
        <ItemDescription>
          <ItemDescriptionContent>
            <SubTitle>{item.name}</SubTitle>
            <SimpleText>{item.owner.login}</SimpleText>
          </ItemDescriptionContent>
          <ArrowIcon name="chevron-right" size={18} color="#e1e1e1" />
        </ItemDescription>
      </Item>
    </TouchableOpacity>
  );
};

export default ListItem;
