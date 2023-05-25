const rateEl = document.querySelector(".rate")
const thanksEl = document.querySelector(".thank-you")
const circleEl = document.querySelectorAll(".circle");
const submitEl = document.getElementById("submit-btn");
const ratingEl = document.getElementById("rating")

submitEl.addEventListener("click", () => {
    thanksEl.classList.remove("hidden")
    rateEl.classList.add("hidden")

    
});

circleEl.forEach((rate) => {
        rate.addEventListener("click", () => {
        ratingEl.innerHTML = rate.innerHTML
        })
    })