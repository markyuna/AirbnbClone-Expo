// jest.setup.js
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native/Libraries/Image/Image', () => {
  const { View } = require('react-native');
  return {
    ...View,
    resizeMode: 'center',
  };
});
