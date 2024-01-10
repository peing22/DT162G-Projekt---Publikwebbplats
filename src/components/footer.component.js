import React from "react";

// Exporterar footer-komponent
export default function Footer() {

    // Lagrar aktuellt år i en variabel
    const currentYear = new Date().getFullYear();

    // Renderar footer-element med innehåll
    return (
        <footer>
            <p>&copy; {currentYear} Per Ingemarsson AB</p>
        </footer>
    );
}