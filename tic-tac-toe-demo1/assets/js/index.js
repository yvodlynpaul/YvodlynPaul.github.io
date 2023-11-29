const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const WINNING_COMBINATIONS = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
const caseElements = document.querySelectorAll("[data-case]")
const tableBox = document.getElementById("table-box")
let circleTurn
const winningMessageElement = document.getElementById("winningMessage")
const winningMessageTextElement = document.querySelector("[data-winning-message-text]")
const restartButton = document.getElementById("restartButton")
/* console.log(caseElements) */

startGame()

restartButton.addEventListener("click", startGame)

function startGame(){
    circleTurn = false
    caseElements.forEach(caseElement => {
        caseElement.classList.remove(X_CLASS)
        caseElement.classList.remove(CIRCLE_CLASS)
        caseElement.removeEventListener("click",handleClick)
        caseElement.addEventListener("click",handleClick, {once:true})
    })  
    setBoardHoverClass()
    winningMessageElement.classList.remove("show")
}


function handleClick(e){
    const cases = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //place the marck
    placeMark(cases,currentClass)
    //check for win
    if (checkWin(currentClass)){
        endGame(false)
    }else if (isDraw()){
        //check for draw
        endGame(true)
    }else{
        //switch turns
        swapTurns()
        setBoardHoverClass()
    }
}

function isDraw(){
    return [...caseElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cases,currentClass){
    cases.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    tableBox.classList.remove(X_CLASS)
    tableBox.classList.remove(CIRCLE_CLASS)

    if (circleTurn){
        tableBox.classList.add(CIRCLE_CLASS)
    }else{
        tableBox.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return caseElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw){
    if (draw){
        winningMessageTextElement.innerText = "Draw!"
    }else{
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : " X's"} Wins!`
    }
    winningMessageElement.classList.add("show")
}