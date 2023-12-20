import React from "react";
import { Link } from "react-router-dom";

// Exporterar bakgrunds-komponent
export default function Background() {

    // Renderar article-element
    return (
        <article className="background">
            <h1>Bakgrund</h1>
            <p>Vi människor är skapade för rörelse. Våra kroppar har sett ut ungefär som de gör idag i cirka 18 000-25 000 års tid. De senaste åren har vårt levnadssätt dock förändrats drastiskt till det sämre. Vi har blivit allt mer stillasittande. Vår brist på rörelse påverkar oss inte bara för stunden utan också våra liv på längre sikt.</p>
            <p>Musklerna, skelettet och lederna stärks när de belastas, och kroppen anpassar sig efter de krav den utsätts för. Just muskulaturen tänker vi i första hand på som ett redskap för att röra våra ben och armar, men muskulaturen gör så mycket mer. Musklerna är en källa till produktion av hormoner och andra ämnen som påverkar oss.</p>
            <p>När vi använder våra muskler och tränar dem blir vi inte bara starkare. Vi ökar också vår livskvalitet och livslängd samt förebygger och minskar risken för sjukdomar såsom diabetes, Alzheimers sjukdom och hjärt- och kärlsjukdomar.</p>
            <p>Träningen av våra muskler behöver ske strukturerat, på rätt nivå och med rätt svårighetsgrad för att generera beskrivna fördelar. Denna webbplats innehåller olika <Link to="/ovningar">övningar</Link> som du kan utföra regelbundet, i hemmet eller på gym, för att uppnå önskad effekt.</p>
        </article>
    );
}