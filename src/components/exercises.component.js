import React, { useState, useEffect } from "react";
import axios from "axios";

// Exporterar exercises-komponent
export default function Exercises() {

    // Skapar tillståndsvariabel och en funktion för att uppdatera den
    const [exercises, setExercises] = useState([]);

    // Använder react-hook för att anropa funktion när komponenten renderas
    useEffect(() => {
        getExercises();
    }, []);

    // Hämtar övningar från servern och uppdaterar tillståndsvariabeln som lagrar övningarna
    const getExercises = async () => {
        try {
            const response = await axios.get("http://localhost:3001/exercises");
            setExercises(response.data);
        } catch (error) {
            console.error("Felmeddelande:", error);
        }
    }

    // Renderar article-element med instruktion och övningar
    return (
        <article className="exercises">
            <h1>Övningar</h1>
            <p>På denna sida finns ett antal övningar med till&shy;hörande beskriv&shy;ning och film. Varje film inne&shy;håller tre olika nivåer där den sista nivån utförs på gym. Välj en övning per film och utför den tre gånger tio repeti&shy;tioner vid varje tränings&shy;tillfälle.</p>
            <div className="flex-container">
                {exercises.map((exercise) => (
                    <div key={exercise._id} className="exercise">
                        <h2>{exercise.exercisename}</h2>
                        <p>{exercise.description}</p>
                        <div className="video-container">
                            <div className="video-wrap">
                                <video src={`http://localhost:3001/uploads/${exercise.filename}`} controls>
                                    Din webbläsare kan inte visa videon...
                                </video>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}