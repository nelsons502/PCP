function createDie(number) {
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

    const die = document.createElement("div");

    die.classList.add("die");

    for (const dotPos of dotPositions[number]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPos[0]+"%");
        dot.style.setProperty("--left", dotPos[1]+"%");

        die.appendChild(dot);
    }

    return die;

}

const diceContainer = document.querySelector(".dice-wrapper");
const btnRollDice = document.querySelector(".btn-roll-dice");

roll()

function roll() {
    let dice = document.querySelectorAll(".die");
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });
        diceContainer.innerHTML = "";

        const randNum1 = Math.floor(Math.random() * 6) + 1;
        const die1 = createDie(randNum1);
        diceContainer.appendChild(die1);

        const randNum2 = Math.floor(Math.random() * 6) + 1;
        const die2 = createDie(randNum2);
        diceContainer.appendChild(die2);

        document.querySelector("#total").innerHTML = "Your roll is:";
        document.querySelector("#roll-number").innerHTML = (randNum1 + randNum2);
        
    },
    500
    );
}
