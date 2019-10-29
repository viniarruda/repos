import React from 'react';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../components/theme';

export const List = styled.FlatList`
  min-height: 200px;
  width: 100%;
  flex: 1;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.tertiary};
  border-radius: 5px;
`;

export const SeachIcon = styled(Icon)`
  padding: 10px;
`;

export const SeachInput = styled.TextInput`
  flex: 1;
  padding: 10px 10px 10px 0;
  color: ${theme.colors.secondary};
`;

export const Search = ({onChange, placeholder}) => (
  <SearchContainer>
    {console.log('on change', onChange)}
    <SeachIcon name="ios-search" size={18} color="#000" />
    <SeachInput
      placeholder={placeholder}
      onBlur={e => onChange(e.nativeEvent.text)}
      onKeyPress={e => onChange(e.nativeEvent.text)}
      underlineColorAndroid="transparent"
    />
  </SearchContainer>
);
