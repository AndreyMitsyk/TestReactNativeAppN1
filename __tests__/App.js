import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

it('throw error', () => {
  const tree = renderer.create(
    <App />
  );

  expect(() => {
    tree.find(Button).first().props().onPress();
  }).toThrow();
});
