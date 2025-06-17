import React, { useEffect, useState } from 'react';
import "./NbUser.css";

function UsersCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => {
          console.log("Réponse de l'API :", data); // AJOUTE ÇA
        setCount(data.utilisateurs.length);
      })
      .catch(err => {
        console.error("Erreur API :", err);
      });
  }, []);

  return (
    <div>
        
      <p>Nombre d’utilisateurs : {count !== null ? count : "Chargement..."}</p>
        
    </div>
  );
}

export default UsersCount;
