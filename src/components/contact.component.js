import React from "react";

// Exporterar contact-komponent
export default function Contact() {

    // Renderar article-element
    return (
        <article>
            <h1>Kontakt</h1>
            <p>Träna för att leva är ett koncept framarbetat för att främja en god hälsa och livsstil bland människor. Bakom konceptet står den erfarna fysioterapeuten Per Ingemarsson. Hans breda kunskap och gedigna erfarenhet omfattar olika aspekter av fysisk aktivitet, från rehabilitering efter skador till förebyggande övningar för att främja långsiktig hälsa. Han är även en uppskattad föreläsare.</p>
            <p>Per Ingemarsson kan kontaktas via telefon eller e-post om du har frågor, är intresserad av att boka en föreläsning i ämnet eller vill boka en tid för en personlig konsultation.</p>
            <p>Telefon: <a href="tel:+46700000000">+4670-000 00 00</a></p>
            <p>E-post: <a href="mailto:per@example.com">per@exempel.com</a></p>
        </article>
    );
}