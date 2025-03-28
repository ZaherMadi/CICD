import React, { useState } from "react";
import { validateName, validateEmail, validatePostalCode, validateDateOfBirth } from "./validation.js";
import "./Formulaire.css";


const Formulaire = () => {
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
    console.log(`🟡 [handleChange] Champ modifié: ${name} => "${value}"`);

    const cleanedValue = value.trim();
    setFormData((prev) => {
      const updated = { ...prev, [name]: cleanedValue };
      console.log("📦 [formData mis à jour]:", updated);
      return updated;
    });

    // Validation dynamique
    let newErrors = { ...errors };

    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
        newErrors[name] = validateName(cleanedValue) ? "" : "Champ invalide";
        console.log(`🧪 [validateName] ${name}: "${cleanedValue}" => ${validateName(cleanedValue)}`);
        break;
      case "email":
        newErrors[name] = validateEmail(cleanedValue) ? "" : "Email invalide";
        console.log(`📧 [validateEmail] "${cleanedValue}" => ${validateEmail(cleanedValue)}`);
        break;
      case "postalCode":
        newErrors[name] = validatePostalCode(cleanedValue) ? "" : "Code postal invalide";
        console.log(`📮 [validatePostalCode] "${cleanedValue}" => ${validatePostalCode(cleanedValue)}`);
        break;
      case "birthDate":
        newErrors[name] = validateDateOfBirth(cleanedValue) ? "" : "Vous devez avoir plus de 18 ans";
        console.log(`🎂 [validateDateOfBirth] "${cleanedValue}" => ${validateDateOfBirth(cleanedValue)}`);
        break;
      default:
        break;
    }

    setErrors(newErrors);
    console.log("❗ [errors actuels]:", newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 [Soumission] Données:", formData);

    const newErrors = {};

    if (!validateName(formData.firstName)) newErrors.firstName = "Nom invalide";
    if (!validateName(formData.lastName)) newErrors.lastName = "Prénom invalide";
    if (!validateDateOfBirth(formData.birthDate)) newErrors.birthDate = "Vous devez avoir plus de 18 ans";
    if (!validatePostalCode(formData.postalCode)) newErrors.postalCode = "Code postal invalide";
    if (!validateName(formData.city)) newErrors.city = "Ville invalide";
    if (!validateEmail(formData.email)) newErrors.email = "Email invalide";

    console.log("📛 [Résultat validation finale]:", newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("✅ Inscription réussie !");
      setErrors({});
      // localStorage.setItem("Formulaire", JSON.stringify(formData)); // Pas demandé mais au moins c'est stocké
      setFormData({ firstName: "", lastName: "", birthDate: "", postalCode: "", city: "", email: "" });
    }
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastName">Nom :</label>
        <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
      </div>
      <div>
        <label htmlFor="firstName">Prénom :</label>
        <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
      </div>
      <div>
        <label htmlFor="birthDate">Date de naissance :</label>
        <input id="birthDate" type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        {errors.birthDate && <span style={{ color: "red" }}>{errors.birthDate}</span>}
      </div>
      <div>
        <label htmlFor="postalCode">Code Postal :</label>
        <input id="postalCode" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        {errors.postalCode && <span style={{ color: "red" }}>{errors.postalCode}</span>}
      </div>
      <div>
        <label htmlFor="city">Ville :</label>
        <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
      </div>
      <div>
        <label htmlFor="email" >Email :</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <button role="button" type="submit" disabled={Object.values(errors).some((err) => err !== "") || Object.values(formData).some((val) => val.trim() === "")}>
        Soumettre
      </button>
    </form>
  );
};

export default Formulaire;
