let totalSeconds;
let interval;

function countDown(){
    const minutes = Math.floor(totalSeconds / 60)
    const secondes = totalSeconds % 60

    const sec = secondes < 10 ? "0" + secondes : secondes

    countdownDisplay.textContent = minutes + " : " + sec

    if (totalSeconds > 0){
        totalSeconds--
    }else{
        countdownDisplay.textContent = "C'est terminé"
        clearInterval(interval)
    }
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (isNaN(choice.value)){
        alert("Entrez un chiffre avant que je me fâche")
    }else{
        totalSeconds = choice.value * 60
        choice.value = ""
        clearInterval(interval)
        interval = setInterval(countDown,1000)
    }
})