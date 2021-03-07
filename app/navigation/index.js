import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

const Providers = () => {
  console.log('Start BEME app');
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
