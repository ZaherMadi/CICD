import React, { useState } from "react";
import { validateName, validateEmail, validatePostalCode, validateDateOfBirth } from "./validation";
import "./Formulaire.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    postalCode: "",
    city: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(formData.firstName)) newErrors.firstName = "Nom invalide";
    if (!validateName(formData.lastName)) newErrors.lastName = "Prénom invalide";
    if (!validateDateOfBirth(formData.birthDate)) newErrors.birthDate = "Vous devez avoir plus de 18 ans";
    if (!validatePostalCode(formData.postalCode)) newErrors.postalCode = "Code postal invalide";
    if (!validateName(formData.city)) newErrors.city = "Ville invalide";
    if (!validateEmail(formData.email)) newErrors.email = "Email invalide";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setFormData({ firstName: "", lastName: "", birthDate: "", postalCode: "", city: "", email: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
      </div>
      <div>
        <label>Prénom :</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
      </div>
      <div>
        <label>Date de naissance :</label>
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        {errors.birthDate && <span style={{ color: "red" }}>{errors.birthDate}</span>}
      </div>
      <div>
        <label>Code Postal :</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        {errors.postalCode && <span style={{ color: "red" }}>{errors.postalCode}</span>}
      </div>
      <div>
        <label>Ville :</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
      </div>
      <div>
        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0 || Object.values(formData).some(v => v === "")}>
        Soumettre
      </button>
    </form>
  );
};

export default Form;