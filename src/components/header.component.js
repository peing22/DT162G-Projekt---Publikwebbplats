import React from "react";
import { Link } from "react-router-dom";

// Exporterar header-komponent
export default function Header() {

    // Renderar header med banner och navigeringsmeny
    return (
        <header>
            <p><Link to="/">Träna för att leva</Link></p>
            <nav>
                <ul>
                    <li><Link to="/bakgrund">Bakgrund</Link></li>
                    <li><Link to="/ovningar">Övningar</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
}