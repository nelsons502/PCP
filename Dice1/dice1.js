function createDice(number) {
    const dotPositions = {
        1: [
            [50,50]
        ],
        2: [
            [20,20],
            [80,80]
        ],
        3: [
            [20,20],
            [50,50],
            [80,80]
        ],
        4: [
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5: [
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80]
        ],
        6: [
            [20,20],
            [20,80],
            [50,20],
            [50,80],
            [80,20],
            [80,80]
        ]
    }

    const dice = document.createElement("div");

    dice.classList.add("dice");

    for (const dotPos of dotPositions[number]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPos[0]+"%");
        dot.style.setProperty("--left", dotPos[1]+"%");

        dice.appendChild(dot);
    }

    return dice;

}

function randomizeDice(diceContainer, numDice) {
    diceContainer.innerHTML = "";

    for (let i = 0; i < numDice; i++) {
        const randNum = Math.floor(Math.random() * 6) + 1;
        const dice = createDice(randNum);

        diceContainer.appendChild(dice);
    }
}

const NUM_DICE = 2;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

randomizeDice(diceContainer, NUM_DICE);

btnRollDice.addEventListener("click", () => {
    const interval = setInterval(()=> {
        randomizeDice(diceContainer, NUM_DICE);
    }, 150);

    setTimeout(() => clearInterval(interval),750);
});
