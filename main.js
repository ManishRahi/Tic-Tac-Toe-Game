let hidden = document.querySelector("#cong");
let contain = document.querySelector(".container");
let gameboard = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let msg = document.querySelector("#won");


let turn0 = true;
let draw = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        let XO = new Audio("./sounds/XO.mp3");
        XO.play(); 

        if(turn0 === true){
            box.innerText = "O";
            
            turn0 = false;
            box.setAttribute("disabled","true");
            box.style.backgroundColor = "#bbd0ff";
        }
        else{
            box.innerText = "X";
            
            turn0 = true;
            box.setAttribute("disabled","true");
            box.style.backgroundColor = "#d0f4de";
            
        }
        
        checkWinner();
        count++;
        drawGame();
    })
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let posVal1 = (boxes[pattern[0]].innerText);
        let posVal2 = (boxes[pattern[1]].innerText);
        let posVal3 = (boxes[pattern[2]].innerText);

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal1 === posVal3){
                msg.innerText = `Congratulations, Winner is ${posVal1}`;
                hidden.classList.remove("hide");
                disableBtn();
                draw = false;
            }
        }

    }
};

const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


const enabledBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        box.style.backgroundColor = "#fff";
    }
}

const resetGame = () => {
    let Sound = new Audio("./sounds/newBTN.mp3");
    Sound.play();

    enabledBtn();
    hidden.classList.add("hide");
    count = 0;
    turn0 = true;
    draw = true;
    msg.innerText = "";
}

const drawGame = () => {
    if(count === 9  && draw === true){
        msg.innerText = "This Match is a Draw !!!!";
        hidden.classList.remove("hide");
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);




