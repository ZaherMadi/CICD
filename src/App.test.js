import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the App component without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Formulaire/i)).toBeInTheDocument();
  });
});