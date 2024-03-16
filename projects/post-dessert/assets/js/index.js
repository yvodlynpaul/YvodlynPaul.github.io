const btn = document.querySelectorAll(".ellipse i")
const slides = document.querySelectorAll(".slider")
let counter = 0

btn[0].addEventListener("click", function () {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    carousel();
});

btn[1].addEventListener("click", function () {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    carousel();
});

function carousel() {
    // Supprimez les classes .active de toutes les diapositives
    slides.forEach(slide => slide.classList.remove("active"));

    // Ajoutez la classe .active à la diapositive actuelle
    slides[counter].classList.add("active");
}