// Vérifie que le nom, prénom ou ville contient seulement des lettres, accents, tirets et espaces
export const validateName = (name) => {
  if (!name) return false;
  const cleaned = name.trim().replace(/\s+/g, " ");
  return /^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,50}$/.test(cleaned);
};

// Vérifie que l'email est bien au bon format
export const validateEmail = (email) => {
  if (!email) return false;
  const cleaned = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
};

// Vérifie que le code postal contient 5 chiffres
export const validatePostalCode = (postalCode) => {
  if (!postalCode) return false;
  const cleaned = postalCode.trim().replace(/\s/g, "");
  return /^[0-9]{5}$/.test(cleaned);
};

// Vérifie que la personne a au moins 18 ans et que la date n'est pas dans le futur
export const validateDateOfBirth = (birthDate) => {
  if (!birthDate) return false;

  const birthDateObj = new Date(birthDate);
  const today = new Date();

  // Vérifie que ce n'est pas une date future
  if (birthDateObj > today) return false;

  const age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  const dayDiff = today.getDate() - birthDateObj.getDate();

  const is18 =
    age > 18 ||
    (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));

  return is18;
};
