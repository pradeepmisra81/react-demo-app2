import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Welcome to React Demo App2 !');
  expect(textElement).toBeInTheDocument();
});
