// __tests__/CustomButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../../src/components/CustomButton';

test('renders CustomButton correctly', () => {
  const { getByText } = render(<CustomButton text="Press me" />);
  const buttonElement = getByText('Press me');

  expect(buttonElement).toBeTruthy();
});

test('calls onPress callback when the button is pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<CustomButton text="Press me" onPress={onPressMock} />);
  const buttonElement = getByText('Press me');

  fireEvent.press(buttonElement);
  expect(onPressMock).toHaveBeenCalled();
});
