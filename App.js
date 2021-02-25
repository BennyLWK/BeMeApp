import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './app/navigation/tabs';
import {Booking, Login} from './app/screens';
import {CustomDrawerContent} from './app/components';
import {SIZES} from './app/constants';

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
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={DrawerNavigator} />
        {/*<Stack.Screen name="Login" component={Login} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
