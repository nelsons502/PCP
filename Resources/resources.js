// the number of resources required for a complete board
const boardResourceCount = {
    "ore":3,
    "wheat":4,
    "sheep":4,
    "wood":4,
    "brick":3,
    "desert":1
};
// the number of each frequency that is required for the board
const boardFrequencyCount = {
    "2":1,
    "3":2,
    "4":2,
    "5":2,
    "6":2,
    "8":2,
    "9":2,
    "10":2,
    "11":2,
    "12":1
};
// the number of dots on each frequency
const frequencyDotCount = {
    "2":1,
    "3":2,
    "4":3,
    "5":4,
    "6":5,
    "8":5,
    "9":4,
    "10":3,
    "11":2,
    "12":1
};

function populateResources() {
    let numbers = deepCopy(boardFrequencyCount);
    let dots = deepCopy(frequencyDotCount);

    const resourceContainer = document.querySelector(".resource-container");
    resourceContainer.innerHTML = "";
    Object.keys(boardResourceCount).forEach((key) => {
        for (let i=0;i<boardResourceCount[key];i++) {
            let res = document.createElement("div");
            // set class based on the key
            res.classList.add("resource");
            res.classList.add(key);

            // add a frequency item if not desert
            if (key !== "desert") {
                const freq =  document.createElement("div");
                const num = getRandomKey(numbers);
                freq.textContent = num;
                freq.classList.add("frequency");
                freq.classList.add(num);

                // decrese the number of times this number needs to be picked. Remove it if zero.
                numbers[num]--;
                if (numbers[num] === 0) {
                    delete numbers[num];
                }
                for (let j=0;j<dots[num];j++) {
                    dotEl = document.createElement("div");
                    dotEl.classList.add("dot");
                    freq.appendChild(dotEl);
                }

                res.appendChild(freq);
            }
            
            resourceContainer.appendChild(res);
        }
        
    });
        
        
}

function deepCopy(obj) {
    // Convert the object to a JSON string
    const jsonString = JSON.stringify(obj);

    // Parse the JSON string back to an object
    const deepCopiedObject = JSON.parse(jsonString);

    return deepCopiedObject;
}
function getRandomKey(obj) {
    // Get the keys of the object
    const keys = Object.keys(obj);

    // Check if the object is not empty
    if (keys.length === 0) {
        return undefined; // or handle the case when the object is empty
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Get the key at the random index
    const randomKey = keys[randomIndex];

    return randomKey;
}