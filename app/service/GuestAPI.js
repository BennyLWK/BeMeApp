import {svcUtil} from './ServiceUtil';

// export default (service) => ({
//   create: (email, phoneCountryCode, phoneNumber) => {
//     const data = {
//       email,
//       phoneCountryCode,
//       phoneNumber,
//     };
//     if (email) {
//       const path = '/api/create';
//       return service.post(path, data);
//     }
//     throw new Error('Email is required!');
//   },
// });

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
