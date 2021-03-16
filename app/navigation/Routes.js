import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const Routes = () => {
  let routeName;
  const {user, setUser} = useContext(AuthContext);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log('onAuthStateChanged => ' + user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then((value) => {
      if (value == null) {
        console.log('No access_token');
        setIsFirstLaunch(true);
      } else {
        console.log('access_token: ', value);
        console.log('navigate to Home page');
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null) {
    /**
     * This is the 'tricky' part: The query to AsyncStorage is not finished,
     * so you can also put a placeholder of some sort, but effectively the interval
     * between the first mount and AsyncStorage retrieving your data won't be noticeable
     * to the user. But if you want to display anything then you can use a LOADER here
     **/
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Auth';
  } else {
    routeName = 'App';
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routeName}>
        <Stack.Screen name="App" component={AppStack} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Routes;
