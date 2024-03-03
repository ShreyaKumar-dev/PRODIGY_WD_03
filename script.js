console.log("Welcome to Tic Tac Toe")
let turn = "X"
let gameover = false

// Finction to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('box_text')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.game_won').innerText = boxText[e[0]].innerText + " Won"
            gameover = true;
            // document.querySelector('.line').style.width = "25vw"
            // document.querySelector('.line').style.transform = `translate(${e[0]%3*25}vw, ${Math.floor(e[0]/3)*25}vw) rotate(${e[0]%2*45}deg)`
            // document.querySelector('.line').style.display = "block"
        }
    })
}

// Function to check for a draw
const checkDraw = () => {
    let boxTexts = document.querySelectorAll('.box_text');
    let draw = true;
    boxTexts.forEach(box => {
        if (box.innerText === '') {
            draw = false;
        }
    });
    if (draw && !gameover) {
        document.querySelector('.game_won').innerText = "It's a Draw!";
        gameover = true;
    }
}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box_text');
    element.addEventListener('click', () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            checkDraw();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset the game
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.box_text');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    document.querySelector('.game_won').innerText = "";
    document.getElementsByClassName("info")[0].innerText = "Turn for X";
    gameover = false;
});

