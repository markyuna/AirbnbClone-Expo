const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
  
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|@react-navigation)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ],
};
