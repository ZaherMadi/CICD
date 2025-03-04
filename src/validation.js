export const validateName = (name) => /^[a-zA-ZÀ-ÿ'\\-\\s]+$/.test(name.trim());

export const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email.trim());
export const validatePostalCode = (postalCode) =>
    /^\\d{5}$/.test(postalCode.trim());

export const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
};
  
export const validateDateOfBirth = (birthDate) =>
    calculateAge(birthDate) >= 18;
  