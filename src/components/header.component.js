import React from "react";
import { Link } from "react-router-dom";

// Exporterar header-komponent
export default function Header() {

    // Renderar header med banner och navigeringsmeny
    return (
        <header>
            <div className="banner-logo">
                <picture>
                    <source type="image/jpg" media="(min-width: 601px)" srcSet={`${process.env.PUBLIC_URL}/banner-large.jpg`} width="1920" height="480" />
                    <source type="image/jpg" media="(max-width: 600px)" srcSet={`${process.env.PUBLIC_URL}/banner-small.jpg`} width="600" height="150" />
                    <img src={`${process.env.PUBLIC_URL}/banner-large.jpg`} alt="Naturbild" width="1920" height="480" />
                </picture>
                <p className="logotype"><Link to="/">Träna för att leva</Link></p>
            </div>
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