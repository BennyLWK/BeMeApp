import {svcUtil} from './ServiceUtil';

export const create = (email, phoneCountryCode, phoneNumber) => {
  const data = {
    email,
    phoneCountryCode,
    phoneNumber,
  };
  if (email) {
    console.log('data @ create: ', data);
    const path = '/api/create';
    return svcUtil.post(path, data);
  }
  throw new Error('Email is required!');
};

export const authenticate = (loginType, authToken) => {
  const data = {
    loginType,
    authToken,
  };
  if (authToken) {
    console.log('data @ authenticate: ', data);
    const path = '/api/authenticate';
    return svcUtil.post(path, data);
  }
  throw new Error('authToken is required!');
};
