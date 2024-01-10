const btnSubmit = document.querySelector(".btn-submit");
const rating = document.querySelectorAll("ul li")
const ratingScore = document.querySelector(".message span")
const ratingBox = document.querySelector(".rating");
const thankyouBox = document.querySelector(".thankyou");

btnSubmit.addEventListener("click", () => {
    if (ratingBox.classList.contains("active")) {
        ratingBox.classList.remove("active")
        thankyouBox.classList.add("active")
    }
})

rating.forEach(rate => {
    rate.addEventListener("click", (e) => {
        ratingScore.innerHTML = e.target.innerHTML;
        rate.classList.toggle("clicked")
    })

    if (rate.nextElementSibling && rate.nextElementSibling.classList.contains("clicked")) {
        rate.nextElementSibling.classList.remove("clicked");
    }
})
