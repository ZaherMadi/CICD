import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js';
import Formulaire from './Formulaire.jsx';

describe('App Component', () => {
  test('renders the App component with the title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Formulaire/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the Formulaire component', () => {
    render(<App />);
    const formulaireElement = screen.getByTestId('formulaire');
expect(formulaireElement).toBeInTheDocument();
  });
});


describe('Formulaire Component', () => {
  test('renders the form with all fields and submit button', () => {
    render(<Formulaire />);
    expect(screen.getByLabelText(/^Nom\s*:/i)).toBeInTheDocument(); // LE ^ pour isoler la recherche, sinon sans quoi ca va causer un bug de test
    expect(screen.getByLabelText(/^Prénom\s*:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date de naissance/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Code Postal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ville/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Soumettre/i })).toBeInTheDocument();
  });

  test('displays validation errors for invalid inputs', () => {
    render(<Formulaire />);
    const firstNameInput = screen.getByLabelText(/^Prénom\s*:/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /Soumettre/i });

    fireEvent.change(firstNameInput, { target: { value: '123' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Champ invalide/i)).toBeInTheDocument();
    expect(screen.getByText(/Email invalide/i)).toBeInTheDocument();
  });

  test('disables the submit button when form is invalid', () => {
    render(<Formulaire />);
    const submitButton = screen.getByRole('button', { name: /Soumettre/i });
    expect(submitButton).toBeDisabled();
  });

  test('enables the submit button when form is valid', () => {
    render(<Formulaire />);
    const firstNameInput = screen.getByLabelText(/^Prénom\s*:/i);
    const lastNameInput = screen.getByLabelText(/^Nom\s*:/i);
    const birthDateInput = screen.getByLabelText(/Date de naissance/i);
    const postalCodeInput = screen.getByLabelText(/Code Postal/i);
    const cityInput = screen.getByLabelText(/Ville/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /Soumettre/i });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(birthDateInput, { target: { value: '2000-01-01' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(submitButton).not.toBeDisabled();
  });

  test('clears the form and errors on successful submission', () => {
    render(<Formulaire />);
    const firstNameInput = screen.getByLabelText(/^Prénom\s*:/i);
    const lastNameInput = screen.getByLabelText(/^Nom\s*:/i);
    const birthDateInput = screen.getByLabelText(/Date de naissance/i);
    const postalCodeInput = screen.getByLabelText(/Code Postal/i);
    const cityInput = screen.getByLabelText(/Ville/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /Soumettre/i });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(birthDateInput, { target: { value: '2000-01-01' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);

    expect(firstNameInput.value).toBe('');
    expect(lastNameInput.value).toBe('');
    expect(birthDateInput.value).toBe('');
    expect(postalCodeInput.value).toBe('');
    expect(cityInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(screen.queryByText(/Champ invalide/i)).not.toBeInTheDocument();
  });
});

