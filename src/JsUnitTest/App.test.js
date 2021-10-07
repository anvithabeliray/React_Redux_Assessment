import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../src_code/store/store';

test('renders learn react link', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/todo/i);
  expect(linkElement1).toBeTruthy
  const linkElement2 = screen.getByText(/pokemonlist/i);
  expect(linkElement2).toBeTruthy
});
 