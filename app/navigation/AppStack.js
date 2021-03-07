import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Tabs from './Tabs';
import {Booking, Login} from '../screens';
import {CustomDrawerContent} from '../components';
import {SIZES} from '../constants';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      edgeWidth={0}
      drawerStyle={{height: SIZES.height - 100, width: '40%'}}
      drawerPosition={'right'}
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="HomeTab" component={Tabs} />
      <Drawer.Screen name="Booking" component={Booking} />
    </Drawer.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
