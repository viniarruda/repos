/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRepos} from '../../store/repos/thunks';
import * as githubSelector from '../../store/repos/selectors';

import Container from '../../components/layout/Container';
import {Title} from '../../components/layout/Typography';
// import { List } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);

  const fetchGithubRepos = async () => {
    await dispatch(getRepos('viniarruda'));
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  return (
    <Container>
      <Title>Recent</Title>
      {console.log('repos', repos)}
      {/* <List
        data={posts.list}
        refreshing={posts.loading}
        onRefresh={setPostsList}
        keyExtractor={item => item.id}
        renderItem={(item) => <PostListItem {...item}/>}
      /> */}
    </Container>
  );
};

Home.navigationOptions = ({navigation}) => ({
  title: 'Home',
});

export default Home;
