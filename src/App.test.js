import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js';
import Formulaire from './Formulaire.jsx';


const validFormData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2000-01-01',
  postalCode: '75000',
  city: 'Paris',
  email: 'john.doe@example.com',
};

const fillForm = () => {
  fireEvent.change(screen.getByLabelText(/^Prénom\s*:/i), { target: { value: validFormData.firstName } });
  fireEvent.change(screen.getByLabelText(/^Nom\s*:/i), { target: { value: validFormData.lastName } });
  fireEvent.change(screen.getByLabelText(/Date de naissance/i), { target: { value: validFormData.birthDate } });
  fireEvent.change(screen.getByLabelText(/Code Postal/i), { target: { value: validFormData.postalCode } });
  fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: validFormData.city } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: validFormData.email } });
};

describe.skip('App Component', () => {
  test('renders the App component with the title', () => {
    render(<App />);
    expect(screen.getByText(/Formulaire/i)).toBeInTheDocument();
  });

  test('renders the Formulaire component', () => {
    render(<App />);
    expect(screen.getByTestId('formulaire')).toBeInTheDocument();
  });
});

describe.skip('Formulaire Component', () => {
  beforeEach(() => {
    render(<Formulaire />);
  });

  test('renders all fields and submit button', () => {
    expect(screen.getByLabelText(/^Nom\s*:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Prénom\s*:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date de naissance/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Code Postal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ville/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Soumettre/i })).toBeInTheDocument();
  });

  test('shows validation errors for invalid inputs', () => {
    fireEvent.change(screen.getByLabelText(/^Prénom\s*:/i), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByRole('button', { name: /Soumettre/i }));
    expect(screen.getByText(/Champ invalide/i)).toBeInTheDocument();
    expect(screen.getByText(/Email invalide/i)).toBeInTheDocument();
  });

  test('submit button is disabled when form is invalid', () => {
    expect(screen.getByRole('button', { name: /Soumettre/i })).toBeDisabled();
  });

  test('submit button is enabled when form is valid', () => {
    fillForm();
    expect(screen.getByRole('button', { name: /Soumettre/i })).not.toBeDisabled();
  });

  test('clears form and errors on successful submission', () => {
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /Soumettre/i }));

    expect(screen.getByLabelText(/^Prénom\s*:/i).value).toBe('');
    expect(screen.queryByText(/Champ invalide/i)).not.toBeInTheDocument();
  });

  test('saves data to localStorage on successful submission', () => {
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /Soumettre/i }));

    const saved = JSON.parse(localStorage.getItem('Formulaire'));
    expect(saved).toEqual(validFormData);
  });
});

