import React from 'react';
import {useScreens} from 'react-native-screens';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Navigator from './src/routes';

import {store} from './src/store/redux';

useScreens();

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};
