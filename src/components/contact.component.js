import React from "react";

// Exporterar contact-komponent
export default function Contact() {

    // Renderar article-element
    return (
        <article className="contact">
            <h1>Kontakt</h1>
            <p>"Träna för att leva" är ett koncept som jag har arbetat fram för att främja god hälsa och livskvalitet hos människor. Mitt namn är Per Ingemarsson, och jag är en erfaren fysioterapeut som brinner för mitt jobb!</p>
            <p>Min breda kunskap och gedigna erfarenhet omfattar olika aspekter av fysisk aktivitet, från rehabilitering efter skador till förebyggande övningar för att främja långsiktig hälsa.</p>
            <p>Du är välkommen att kontakta mig via telefon eller e-post om du har frågor eller är intresserad av att boka en inspirerande föreläsning baserad på mitt koncept.</p>
            <div className="contact-info">
                <div className="contact-wrap">
                    <p className="phone"><i className="fa-solid fa-phone"></i>Telefon: <a href="tel:+46700000000">+4670-000 00 00</a></p>
                    <p className="mail"><i className="fa-solid fa-envelope"></i>E-post: <a href="mailto:namn@domän.com">namn@domän.com</a></p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/per.jpg`} alt="Per Ingemarsson" width="400" height="400" />
            </div>
        </article>
    );
}