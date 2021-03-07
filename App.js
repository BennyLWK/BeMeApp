import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Providers from './app/navigation';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Providers />;
};

export default App;
