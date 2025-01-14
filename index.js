import {Persona} from "./utils.js"


const render = () => {
    const personas = [
        {
            nombre: "Juan",
            apellido: "perez",
            edad: 1,
        },
        {
            nombre: "Ana",
            apellido: "Maria",
            edad: 2, 
        },
    ];

    const body = document.querySelector ("body");

    for (const persona of personas) {
        const instanciaPersona = new Persona (persona.nombre, persona.apellido, persona.edad)

        const nodoPersona = instanciaPersona.render();
        body.appendChild(nodoPersona);
    };


   
};

document.addEventListener("DOMContentLoaded", render);