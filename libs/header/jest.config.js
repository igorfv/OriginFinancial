module.exports = {
  displayName: 'header',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/header',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
  },
};
