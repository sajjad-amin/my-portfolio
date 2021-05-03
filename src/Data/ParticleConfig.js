const ParticleConfig = {
    "particles": {
        "number": {
            "value": window.matchMedia("(max-width: 700px)").matches ? 20 : 100,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "speed": 5,
                "size_min": 0.2
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}
export default ParticleConfig