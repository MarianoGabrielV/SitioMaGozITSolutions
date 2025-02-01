particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#25d366" }, // Color verde
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150 },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Hace que las partículas se alejen del mouse
            },
            onclick: {
                enable: true,
                mode: "push", // Agrega partículas al hacer clic
            },
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: { opacity: 1 },
            },
            repulse: {
                distance: 100, // Distancia a la que las partículas se alejan del cursor
                duration: 0.4, // Duración del efecto
            },
            push: {
                particles_nb: 4, // Número de partículas generadas al hacer clic
            },
        },
    },
});
