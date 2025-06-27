import React, { useEffect, useState } from 'react';
import "./NbUser.css";

function UsersCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://cicd-part2.vercel.app/users')
      .then(res => res.json())
      .then(data => {
          console.log("Réponse de l'API :", data); 
        if (data && Array.isArray(data.Utilisateurs)) {
  setCount(data.Utilisateurs.length);
} else {
  console.error("⚠️ data.Utilisateurs undefined ou non-array :", data);
  setCount(0); // ou null selon ton UX
}
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
