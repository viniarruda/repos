/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRepos} from '../../store/repos/thunks';
import * as githubSelector from '../../store/repos/selectors';

import Container from '../../components/layout/Container';
import {Title} from '../../components/layout/Typography';
import {Search, List} from './styles';

import {View} from 'react-native';

import ListItem from './Item';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('viniarruda');

  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);

  const fetchGithubRepos = async () => {
    await dispatch(getRepos(searchTerm));
  };

  useEffect(() => {
    if (searchTerm) {
      fetchGithubRepos();
    }
  }, [searchTerm]);

  const handleChange = term => {
    console.log('handle', term);
    setSearchTerm(term);
  };

  return (
    <Container>
      <Title>Recent</Title>
      <View>
        <Search
          placeholder="Search repos"
          onChange={searchString => handleChange(searchString)}
        />
      </View>
      {console.log('repos =====>', repos.list)}
      {console.log('term', searchTerm)}
      {repos.list && (
        <List
          data={repos.list}
          refreshing={repos.loading}
          keyExtractor={item => item.id}
          renderItem={item => <ListItem name={item.name} />}
        />
      )}
    </Container>
  );
};

Home.navigationOptions = ({navigation}) => ({
  title: 'Home',
});

export default Home;
