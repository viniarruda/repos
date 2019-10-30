import React from 'react';
import {SearchContainer, SeachIcon, SeachInput} from './styles';

const Search = ({onChange, placeholder, value, startSearch}) => (
  <SearchContainer>
    <SeachIcon name="search" size={18} color="#e1e1e1" />
    <SeachInput
      placeholder={placeholder}
      onChangeText={e => onChange(e)}
      onBlur={() => startSearch(true)}
      underlineColorAndroid="transparent"
      value={value}
      onSubmitEditing={() => startSearch(true)}
    />
  </SearchContainer>
);

export default Search;
