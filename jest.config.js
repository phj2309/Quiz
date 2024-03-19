// module.exports = {
//   preset: 'react-native',
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-navigation|@react-native-community|@react-native|@slices|@shared)/)',
//   ],
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
// };

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|my-project|react-navigation|@react-navigation/.*))/',
  ],
};
