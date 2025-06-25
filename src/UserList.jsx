import React, { useEffect, useState } from "react";
import "./Formulaire.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://cicd-part2.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.Utilisateurs || []))
      .catch((err) => console.error("Erreur fetch users:", err));
  }, []);

  return (
    <div className="formulaire">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((u, index) => (
          <li key={index}>{u[1]} {u[2]} ({u[5]})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;