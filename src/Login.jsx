import React, { useState } from "react";
import "./Formulaire.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cicd-part2.vercel.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/admin");
        } else {
          setError("Identifiants incorrects");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur lors de la connexion");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <h2>Connexion admin</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;