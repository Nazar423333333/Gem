// ==========================================
// ELEMENTS
// ==========================================

const playButton =
    document.getElementById("playButton");

const gameModal =
    document.getElementById("gameModal");

const modalClose =
    document.getElementById("modalClose");

const startGame =
    document.getElementById("startGame");

const nightCards =
    document.querySelectorAll(".night-card");

const currentNight =
    document.getElementById("currentNight");

const selectedNightText =
    document.getElementById("selectedNightText");

const modalNight =
    document.getElementById("modalNight");

const clock =
    document.getElementById("clock");

const energy =
    document.getElementById("energy");


let selectedNight = 1;


// ==========================================
// OPEN GAME WINDOW
// ==========================================

playButton.addEventListener(
    "click",

    () => {

        modalNight.textContent =
            `NIGHT ${String(selectedNight).padStart(2, "0")}`;

        gameModal.classList.add("active");

    }
);


// ==========================================
// CLOSE GAME WINDOW
// ==========================================

modalClose.addEventListener(
    "click",

    () => {

        gameModal.classList.remove("active");

    }
);


gameModal.addEventListener(
    "click",

    event => {

        if (event.target === gameModal) {

            gameModal.classList.remove("active");

        }

    }
);


// ESC
document.addEventListener(
    "keydown",

    event => {

        if (event.key === "Escape") {

            gameModal.classList.remove("active");

        }

    }
);


// ==========================================
// NIGHT SELECT
// ==========================================

nightCards.forEach(card => {

    card.addEventListener(
        "click",

        () => {

            nightCards.forEach(item => {

                item.classList.remove("active");

            });


            card.classList.add("active");


            selectedNight =
                Number(card.dataset.night);


            currentNight.textContent =
                selectedNight;


            selectedNightText.textContent =
                `NIGHT ${String(selectedNight).padStart(2, "0")}`;


            modalNight.textContent =
                `NIGHT ${String(selectedNight).padStart(2, "0")}`;


            flashScreen();

        }

    );

});


// ==========================================
// START NIGHT DEMO
// ==========================================

startGame.addEventListener(
    "click",

    () => {

        gameModal.classList.remove("active");

        document
            .getElementById("home")
            .scrollIntoView({

                behavior: "smooth"

            });


        simulateNight();

    }
);


// ==========================================
// NIGHT SIMULATION
// ==========================================

let simulationTimer = null;


function simulateNight() {

    if (simulationTimer) {

        clearInterval(simulationTimer);

    }


    let hour = 12;

    let power = 100;


    clock.textContent =
        "12:00 AM";

    energy.textContent =
        "100%";


    simulationTimer = setInterval(

        () => {

            power -=
                Math.floor(
                    Math.random() * 3
                ) + 1;


            if (power < 0) {

                power = 0;

            }


            energy.textContent =
                `${power}%`;


            if (power <= 20) {

                energy.style.color =
                    "#ff304f";

            } else {

                energy.style.color =
                    "";

            }


            if (
                Math.random() >
                0.65
            ) {

                hour++;

                if (hour === 13) {

                    hour = 1;

                }


                clock.textContent =
                    `${hour}:00 AM`;

            }


            if (
                hour === 6 ||
                power <= 0
            ) {

                clearInterval(
                    simulationTimer
                );

            }

        },

        1700

    );

}


// ==========================================
// RANDOM CCTV FLASH
// ==========================================

function flashScreen() {

    document.body.classList.add(
        "flash"
    );


    setTimeout(

        () => {

            document.body.classList.remove(
                "flash"
            );

        },

        150

    );

}


// ==========================================
// RANDOM CAMERA GLITCH
// ==========================================

setInterval(

    () => {

        if (
            Math.random() >
            0.82
        ) {

            flashScreen();

        }

    },

    5000

);


// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const animatedItems =
    document.querySelectorAll(
        ".feature, .night-card, .gallery-card, .story-main, .story-text"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.animate(

                            [

                                {

                                    opacity: 0,

                                    transform:
                                        "translateY(35px)"

                                },

                                {

                                    opacity: 1,

                                    transform:
                                        "translateY(0)"

                                }

                            ],

                            {

                                duration:
                                    650,

                                easing:
                                    "ease-out",

                                fill:
                                    "forwards"

                            }

                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }

            );

        },

        {

            threshold:
                0.12

        }

    );


animatedItems.forEach(

    item => {

        observer.observe(item);

    }

);


// ==========================================
// NAVBAR SCROLL
// ==========================================

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",

    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.background =
                "rgba(3,5,4,0.96)";

        } else {

            header.style.background =
                "rgba(3,5,4,0.82)";

        }

    }
);
