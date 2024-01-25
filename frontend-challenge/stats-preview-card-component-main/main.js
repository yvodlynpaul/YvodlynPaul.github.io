const stats = document.querySelectorAll(".stats h2 span");
console.log(stats);
let interval = 5000;

stats.forEach(stat => {
    let startValue = 0;
    let endValue = parseInt(stat.getAttribute("data-value"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        stat.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})