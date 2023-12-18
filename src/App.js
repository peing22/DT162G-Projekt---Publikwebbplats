import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header.component";
import Background from "./components/background.component";
import Exercises from "./components/exercises.component";
import Contact from "./components/contact.component";

// Exporterar huvudkomponent för applikationen
export default function App() {

  // Skapar navigationsstruktur där varje sida har sin egen sökväg
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/bakgrund" element={<Background />} />
        <Route path="/ovningar" element={<Exercises />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}