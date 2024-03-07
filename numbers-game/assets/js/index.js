const gameGrid = document.getElementById("game-grid");
// const gridItems = document.querySelectorAll(".grid-item");
const tab = [];

async function makeGrid(rows, cols) {
    gameGrid.style.setProperty('--grid-rows', rows);
    gameGrid.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerHTML = Math.floor((Math.random() * i + 1));
        gameGrid.appendChild(cell).className = "grid-item";
        //tab[i] = Math.floor((Math.random() * (max - min) + min));
    }
}

makeGrid(8, 8).then(() => {
    const gridItems = document.querySelectorAll(".grid-item");
    // console.log(gridItems);

    gridItems.forEach(item => {
        item.addEventListener("click", () => {
            console.log(item.innerHTML);
        })

    })
});












/* 
async function makeGrid(rows, cols) {
    gameGrid.style.setProperty('--grid-rows', rows);
    gameGrid.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerHTML = Math.floor((Math.random() * i + 1));
        gameGrid.appendChild(cell).className = "grid-item";
    }
} */


