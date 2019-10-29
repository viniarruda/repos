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

  const handleChange = async term => {
    console.log('handle', term);
    await setSearchTerm(term);
  };

  return (
    <Container>
      <Title>Recent</Title>
      <View>
        <Search
          placeholder="Search username"
          onChange={searchString => handleChange(searchString)}
        />
      </View>
      {console.log('repos =====>', repos.list)}
      {console.log('term', searchTerm)}
      {repos.list && repos.list.length > 0 && (
        <List
          data={repos.list}
          //ItemSeparatorComponent={}
          keyExtractor={item => item.id}
          renderItem={item => <ListItem {...item} />}
        />
      )}
    </Container>
  );
};

Home.navigationOptions = ({navigation}) => ({
  title: 'Home',
});

export default Home;
