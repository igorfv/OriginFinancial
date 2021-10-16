module.exports = {
  displayName: 'savings-simulator',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/savings-simulator',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
  },
};
