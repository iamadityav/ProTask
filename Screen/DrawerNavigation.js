import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';
import Loading from './Loading';
import AboutUs from './AboutUs';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Loading">
      <Drawer.Screen
        name="Home"
        component={Loading}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Today"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Wall"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
