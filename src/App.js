import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulaire from "./Formulaire";
import Login from "./Login";
import UserListAdmin from "./UserListAdmin";
import UserList from "./UserList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulaire />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<UserListAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
