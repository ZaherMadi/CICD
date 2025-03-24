import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the App component without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Mon Formulaire/i)).toBeInTheDocument();
  });

  test.skip('renders the Formulaire component', () => {
    render(<App />);
    const formulaireElement = screen.getByRole('form'); // Assuming Formulaire has a role="form"
    expect(formulaireElement).toBeInTheDocument();
  });
});