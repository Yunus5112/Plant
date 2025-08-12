import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

// Simple test for App component export
describe('App Component', () => {
  it('exports App component correctly', () => {
    const App = require('../App').default;
    expect(typeof App).toBe('function');
  });

  it('renders a basic component', () => {
    const TestComponent = () => (
      <View testID="test-component">
        <Text>Test Component</Text>
      </View>
    );

    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('test-component')).toBeTruthy();
  });
});
