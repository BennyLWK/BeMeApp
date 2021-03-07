import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  EnterEmail,
  EnterPhoneNumber,
  GenderSelection,
  LinkExpired,
  Login,
  SignInByEmail,
  TroubleLogin,
  VerifyPhoneNumber,
} from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // let routeName;

  useEffect(() => {
    // AsyncStorage.getItem('alreadyLaunched').then((value) => {
    //   if (value == null) {
    //     AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
    //     setIsFirstLaunch(true);
    //   } else {
    //     setIsFirstLaunch(false);
    //   }
    // }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    GoogleSignin.configure({
      webClientId:
        '1049925763841-fh07sdjp1lka1gvt3oc3caelpc21sf8c.apps.googleusercontent.com',
    });
  }, []);

  // if (isFirstLaunch === null) {
  //   return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  // } else if (isFirstLaunch == true) {
  //   routeName = 'Onboarding';
  // } else {
  //   routeName = 'Login';
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EnterPhoneNumber" component={EnterPhoneNumber} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
      <Stack.Screen name="SignInByEmail" component={SignInByEmail} />
      <Stack.Screen name="TroubleLogin" component={TroubleLogin} />
      <Stack.Screen name="LinkExpired" component={LinkExpired} />
      <Stack.Screen name="GenderSelection" component={GenderSelection} />
      <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
    </Stack.Navigator>
  );
};

export default AuthStack;
