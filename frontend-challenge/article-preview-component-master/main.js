const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let el = document.querySelector(".social");
    el.classList.toggle("active");
})