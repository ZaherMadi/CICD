import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js';
import Formulaire from './Formulaire.jsx';
import { validateDateOfBirth } from './validation';


test('returns false for future birth date', () => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  expect(validateDateOfBirth(futureDate.toISOString().split('T')[0])).toBe(false);
});

test('returns false for under 18', () => {
  const recentDate = new Date();
  recentDate.setFullYear(recentDate.getFullYear() - 17);
  expect(validateDateOfBirth(recentDate.toISOString().split('T')[0])).toBe(false);
});
