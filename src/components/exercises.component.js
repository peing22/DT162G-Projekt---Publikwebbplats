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
            const response = await axios.get("http://localhost:3050/exercises");
            setExercises(response.data);
        } catch (error) {
            console.error("Felmeddelande:", error);
        }
    }

    // Renderar article-element med instruktion och övningar
    return (
        <article className="exercises">
            <h1>Övningar</h1>
            <p>På denna sida finns ett antal övningar med tillhörande beskrivning och film. Varje film innehåller tre olika nivåer där den sista nivån utförs på gym.</p>
            <p>Välj en övning per film och utför den tre gånger tio repetitioner vid varje träningstillfälle.</p>
            {exercises.map((exercise) => (
                <div key={exercise._id}>
                    <h3>{exercise.exercisename}</h3>
                    <p>{exercise.description}</p>
                    <video src={`http://localhost:3050/uploads/${exercise.filename}`} width={300} controls>
                        Din webbläsare kan inte visa videon...
                    </video>
                </div>
            ))}
        </article>
    );
}