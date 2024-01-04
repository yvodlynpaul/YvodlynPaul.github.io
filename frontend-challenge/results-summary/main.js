const summaryBox = document.querySelector(".summary-box")
const totalScore = document.querySelector(".score .totalscore")
let myDatas = []


async function fetchDatas() {
    await fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            myDatas = data
        })
    console.log(myDatas[0]);
    summaryDisplay();
    totalScore.textContent = calculateTotalScore();
}

function summaryDisplay() {
    summaryBox.innerHTML = myDatas.map(el => {
        let datas = el
        return `
            <div class="box">
                <div class="lcontent">
                    <img src="${datas.icon}" alt="icon ${datas.category}"/>
                    <h3 class="${datas.category.toLowerCase()}">${datas.category}</h3>
                </div>
                <p class="score"><span>${datas.score}</span> / 100</p>
            </div>
        `
    }).join("")
}

function calculateTotalScore() {
    let totalScore = 0

    myDatas.forEach(data => {
        totalScore += data.score
    })

    return Math.round(totalScore / myDatas.length)
}

window.addEventListener("load", fetchDatas)