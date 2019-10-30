/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRepos} from '../../store/repos/thunks';

import Container from '../../components/layout/Container';
import {Title, SubTitle} from '../../components/layout/Typography';
import {List, Spinner} from './styles';

import {View, ActivityIndicator} from 'react-native';

import ListItem from './Item';
import Search from './Search';

const Home = ({navigation: {navigate}}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);

  const fetchGithubRepos = async () => {
    await dispatch(getRepos(searchTerm));
  };

  useEffect(() => {
    if (searchTerm && startSearch) {
      fetchGithubRepos();
      setStartSearch(false);
    }
  }, [searchTerm, startSearch]);

  const handleChange = term => {
    setSearchTerm(term);
  };

  return (
    <Container>
      <Title>Recent</Title>
      <View>
        <Search
          placeholder="Search repository"
          onChange={searchString => handleChange(searchString)}
          startSearch={search => setStartSearch(search)}
          value={searchTerm}
        />
      </View>
      {repos.loading ? (
        <Spinner>
          <ActivityIndicator size="large" color="#0000ff" />
        </Spinner>
      ) : repos.list && repos.list.length > 0 ? (
        <List
          data={repos.list}
          //ItemSeparatorComponent={}
          keyExtractor={item => item.id}
          renderItem={item => <ListItem {...item} navigate={navigate} />}
        />
      ) : (
        <SubTitle>Please, search an repo</SubTitle>
      )}
    </Container>
  );
};

Home.navigationOptions = ({navigation}) => ({
  title: 'Home',
});

export default Home;
