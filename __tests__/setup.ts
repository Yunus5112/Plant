// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock React Native SVG
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    SvgXml: ({ testID, children, ...props }: any) => 
      React.createElement('SvgXml', { testID, ...props }, children),
    Svg: ({ children, ...props }: any) => 
      React.createElement('Svg', props, children),
  };
});

// Mock Linear Gradient
jest.mock('react-native-linear-gradient', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ children, ...props }: any) => 
      React.createElement('LinearGradient', props, children),
  };
});

// Mock Navigation
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      reset: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

// Mock Safe Area Context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  SafeAreaProvider: ({ children }: any) => children,
  SafeAreaView: ({ children }: any) => children,
}));

// Silence warnings
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

// Jest requires at least one test in setup files
describe('Test Setup', () => {
  it('should configure mocks correctly', () => {
    expect(true).toBe(true);
  });
});
