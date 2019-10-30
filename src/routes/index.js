import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/home';
import DetailScreen from '../screens/details';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Details',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
