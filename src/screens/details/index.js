import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';

const Details = ({navigation}) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(navigation.getParam('url', 'https://github.com'));
  }, [navigation]);

  return <WebView source={{uri: url}} />;
};

export default Details;
