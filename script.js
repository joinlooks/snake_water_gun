// Declaration of variables

let snake = document.getElementById("snake");
let water = document.getElementById("water");
let gun = document.getElementById("gun");
let yourScore = document.getElementById("yourScore");
let myScore = document.getElementById("myScore");
let you = document.getElementById("you");
let me = document.getElementById("me");
let attemptsLeft = document.getElementById("attemptsLeft");
let userChoice = null;
let compChoice = null;
let userPts = 0;
let compPts = 0;
let attempts = 5;
// Choices are 's'[0], 'w'[1], 'g'[2]
let toAppendUser = document.createElement("img");
toAppendUser.style.width = "100px";
let toAppendComp = document.createElement("img");
toAppendComp.style.width = "100px";

// Declaration of functions

function generateCompChoice() {
    let compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        compChoice = "s";
        toAppendComp.src = "snake.png";
    } else if (compNum == 1) {
        compChoice = "w";
        toAppendComp.src = "water.png";
    } else {
        compChoice = "g";
        toAppendComp.src = "gun.png";
    }

    me.innerText = "";
    me.appendChild(toAppendComp);
}

function userWins(userCh, compCh) {
    if (userCh === compCh) {
        return null;
    }
    if (
        (userCh === "s" && compCh === "w") ||
        (userCh === "w" && compCh === "g") ||
        (userCh === "g" && compCh === "s")
    ) {
        return true;
    } else {
        return false;
    }
}

function gameStart() {
    generateCompChoice();
    let win = userWins(userChoice, compChoice);
    if (win === null) {
    } else if (win) {
        userPts++;
    } else if (!win) {
        compPts++;
    }

    // console.log("User:", userChoice);
    // console.log("Comp:", compChoice);

    yourScore.innerText = userPts;
    myScore.innerText = compPts;

    attempts--;
    attemptsLeft.innerText = attempts;
    checkGameEnd();
}

function checkGameEnd() {
    if (attempts == 0) {
        console.log("Inside if");
        let upper = document.getElementsByClassName("upper")[0];
        let won = document.createElement("div");
        won.classList.add("won");
        let firstPara = document.createElement("p");
        let secondPara = document.createElement("p");
        won.appendChild(firstPara);
        won.appendChild(secondPara);

        upper.innerHTML = "";
        upper.classList.remove("upper");
        upper.classList.add("upperAfter");
        upper.appendChild(won);
        if (userPts > compPts) {
            firstPara.innerText = "You Won!";
            secondPara.innerText = "🙌 ✨ 🎉";
        } else if (compPts > userPts) {
            firstPara.innerText = "I Won!";
            secondPara.innerText = "😎 😉 😜";
        } else {
            firstPara.innerText = "Drawn!";
            secondPara.innerText = "🤜 🤛";
        }
    }

    if (attempts == -1) {
        window.location.reload();
    }
}

// Main program logic

snake.addEventListener("click", () => {
    userChoice = "s";
    you.innerText = "";
    toAppendUser.src = "snake.png";
    you.appendChild(toAppendUser);
    gameStart();
});

water.addEventListener("click", () => {
    userChoice = "w";
    you.innerText = "";
    toAppendUser.src = "water.png";
    you.appendChild(toAppendUser);
    gameStart();
});

gun.addEventListener("click", () => {
    userChoice = "g";
    you.innerText = "";
    toAppendUser.src = "gun.png";
    you.appendChild(toAppendUser);
    gameStart();
});
