import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/Home/index.js';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<HomeScreen />);
    
    // Ensure that the "Where are you going?" text is rendered
    const searchButton = getByText('Where are you going?');
    expect(searchButton).toBeTruthy();

    // Ensure that the "Explore nearby stays" button is rendered
    const exploreButton = getByTestId('explore-button');
    expect(exploreButton).toBeTruthy();
  });

  it('navigates to Destination Search screen when search button is pressed', () => {
    const { getByText, getByTestId } = render(<HomeScreen />);
    
    // Mock the navigation object
    const navigation = {
      navigate: jest.fn(),
    };

    // Set the navigation object as a prop
    const { setProps } = render(<HomeScreen navigation={navigation} />);

    // Simulate a press on the search button
    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);

    // Check if the navigate function was called with the correct screen name
    expect(navigation.navigate).toHaveBeenCalledWith('Destination Search');
  });

  it('logs a warning when "Explore nearby stays" button is pressed', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Mock the console.warn function
    console.warn = jest.fn();

    // Simulate a press on the "Explore nearby stays" button
    const exploreButton = getByText('Explore nearby stays');
    fireEvent.press(exploreButton);

    // Check if console.warn was called with the correct message
    expect(console.warn).toHaveBeenCalledWith('Explore Btn clicked');
  });
});
