particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
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
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 4,
            },
        },
    },
});