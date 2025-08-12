import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from './test-utils';
import Button from '../src/components/Button/Button';

describe('Button Component', () => {
  it('renders with title', () => {
    const { getByText } = renderWithProviders(
      <Button title="Test Button" />
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = renderWithProviders(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    fireEvent.press(getByRole('button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = renderWithProviders(
      <Button title="Test Button" onPress={mockOnPress} disabled />
    );
    
    fireEvent.press(getByRole('button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
