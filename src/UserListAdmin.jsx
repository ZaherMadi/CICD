import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Formulaire.css";

const UserListAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");

    fetch("https://cicd-part2.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.Utilisateurs || []))
      .catch((err) => console.error("Erreur fetch users:", err));
  }, [token, navigate]);

  const deleteUser = (id) => {
    fetch(`https://cicd-part2.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(() => {
        setUsers((prev) => prev.filter((u) => u[0] !== id));
      })
      .catch((err) => console.error("Erreur suppression:", err));
  };

  return (
    <div className="formulaire">
      <h2>Admin : Gérer les utilisateurs</h2>
      <ul>
        {users.map((u) => (
          <li key={u[0]}>
            {u[1]} {u[2]} ({u[5]})
            <button style={{ marginLeft: "10px" }} onClick={() => deleteUser(u[0])}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListAdmin;
