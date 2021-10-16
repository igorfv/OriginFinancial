module.exports = {
  displayName: 'layout',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/layout',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
  },
};
