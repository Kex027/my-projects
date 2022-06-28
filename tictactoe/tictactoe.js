let counter = 1;
let win = false;
const gameCellsList = document.querySelectorAll(".game-panel > .game-cell");
const winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],        
]

for (let i = 0; i < 9; i++) {
    gameCellsList[i].addEventListener("mousedown", () => {
            if (gameCellsList[i].classList[1] == "unchecked") {
            respondMouseClick();
        }
    });

    function respondMouseClick() {
        if (counter % 2 != 0) {
            gameCellsList[i].innerText = "O";
        } else {
            gameCellsList[i].innerText = "X";
        }
        gameCellsList[i].removeEventListener("mousedown", respondMouseClick);

        win = checkIfWin();
        if (win) {
            console.log("WIN");
            document.querySelectorAll(".game-panel > .game-cell.unchecked").forEach(freezeGame);
        } else if (counter === 9) {
            console.log("DRAW")
            //console.log("DRAW!!!");
            document.querySelectorAll(".game-panel > .game-cell").forEach(freezeGame);
            document.querySelectorAll(".game-panel > .game-cell").forEach(draw);
            //alert("DRAW");
            //document.location.reload();
        }
        counter++;
    }
}

function freezeGame(div) {
    console.log(div);
    div.classList.remove("unchecked");
    div.classList.remove("hoverable");
    div.style.cursor = "default";
}

checkIfWin = () => {
    // 1, 2, 3
    // 4, 5, 6
    // 7, 8, 9
    // 1, 4, 7
    // 2, 5, 8
    // 3, 6, 9

    // 1, 5, 9
    // 3, 5, 7
    for (let i = 0; i < winCombinations.length; i++) {
        if (gameCellsList[winCombinations[i][0] - 1].innerHTML != "") {
            if (
                gameCellsList[winCombinations[i][0] - 1].innerHTML == gameCellsList[winCombinations[i][1] - 1].innerHTML
                && 
                gameCellsList[winCombinations[i][0] - 1].innerHTML == gameCellsList[winCombinations[i][2] - 1].innerHTML) {
                    gameCellsList[winCombinations[i][0] - 1].classList.add("win-cells");
                    gameCellsList[winCombinations[i][1] - 1].classList.add("win-cells");
                    gameCellsList[winCombinations[i][2] - 1].classList.add("win-cells");
                    return true;
            }
        }
    }
}

draw = (cell) => {
    cell.classList.add("lost-cells");
}

function resetGame() {
    document.location.reload();
}
