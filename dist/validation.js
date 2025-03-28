"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePostalCode = exports.validateName = exports.validateEmail = exports.validateDateOfBirth = void 0;
// Vérifie que le nom, prénom ou ville contient seulement des lettres, accents, tirets et espaces
var validateName = exports.validateName = function validateName(name) {
  if (!name) return false;
  var cleaned = name.trim().replace(/\s+/g, " ");
  return /^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,50}$/.test(cleaned);
};

// Vérifie que l'email est bien au bon format
var validateEmail = exports.validateEmail = function validateEmail(email) {
  if (!email) return false;
  var cleaned = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
};

// Vérifie que le code postal contient 5 chiffres
var validatePostalCode = exports.validatePostalCode = function validatePostalCode(postalCode) {
  if (!postalCode) return false;
  var cleaned = postalCode.trim().replace(/\s/g, "");
  return /^[0-9]{5}$/.test(cleaned);
};

// Vérifie que la personne a au moins 18 ans et que la date n'est pas dans le futur
var validateDateOfBirth = exports.validateDateOfBirth = function validateDateOfBirth(birthDate) {
  if (!birthDate) return false;
  var birthDateObj = new Date(birthDate);
  var today = new Date();

  // Vérifie que ce n'est pas une date future
  if (birthDateObj > today) return false;
  var age = today.getFullYear() - birthDateObj.getFullYear();
  var monthDiff = today.getMonth() - birthDateObj.getMonth();
  var dayDiff = today.getDate() - birthDateObj.getDate();
  var is18 = age > 18 || age === 18 && (monthDiff > 0 || monthDiff === 0 && dayDiff >= 0);
  return is18;
};