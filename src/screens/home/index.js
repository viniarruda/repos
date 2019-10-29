import React from 'react';

import Container from '../../components/layout/Container';
import {Title} from '../../components/layout/Typography';
// import { List } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Recent</Title>
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
