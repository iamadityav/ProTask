import 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Loading from './Screen/Loading';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Screen/MainScreen';
import {store} from './components/redux/store';
import {Provider} from 'react-redux';
import InputText from './components/InputText';
import DrawerNavigation from './Screen/DrawerNavigation';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
