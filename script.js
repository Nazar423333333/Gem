// script.js

const trailerBtn = document.getElementById("trailerBtn");
const trailerModal = document.getElementById("trailerModal");
const closeModal = document.getElementById("closeModal");

trailerBtn.addEventListener("click", () => {
  trailerModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  trailerModal.classList.remove("active");
});

trailerModal.addEventListener("click", (event) => {
  if (event.target === trailerModal) {
    trailerModal.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    trailerModal.classList.remove("active");
  }
});

const cards = document.querySelectorAll(
  ".feature-card, .stat-card, .screen-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            {
              opacity: 0,
              transform: "translateY(25px)"
            },
            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],
          {
            duration: 650,
            easing: "ease-out",
            fill: "forwards"
          }
        );

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
