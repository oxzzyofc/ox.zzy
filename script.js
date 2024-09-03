// Constant letters array
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Randomise letters function
const randomiseLetters = (target) => {
  target.innerText = target.innerText
    .split("")
    .map((letter) => letters[Math.floor(Math.random() * 26)])
    .join("");
};

// Randomise the filler text
const fillNodes = document.querySelectorAll(".fill");
const fillNodesArray = [...fillNodes];
fillNodesArray.map((fillNode) =>
  setInterval(() => randomiseLetters(fillNode), 20)
);

// Randomise hacker name
const hackerName = document.querySelector("#hackerName");
let randomiseHackerName = setInterval(() => randomiseLetters(hackerName), 20);

// Clear randomisation on hacker name and reveal the name
hackerName.onmouseenter = () => {
  clearInterval(randomiseHackerName);

  let functionCounter = 0;

  let resetHackerName = setInterval(() => {
    functionCounter += 1;

    // Could replace this string and for loop, with the split, map, join method above
    // and modify the map function, see below for implementation
    let string = "";

    for (let i = 0; i < hackerName.innerText.length; i++) {
      if (i < functionCounter) {
        string += hackerName.dataset.name[i];
      } else {
        string += letters[Math.floor(Math.random() * 26)];
      }
    }

    hackerName.innerText = string;

    if (functionCounter == hackerName.innerText.length)
      clearInterval(resetHackerName);
  }, 20);
};

// Restart randomisation on mouse leave
hackerName.onmouseleave = () => {
  randomiseHackerName = setInterval(() => randomiseLetters(hackerName), 20);
};

// Alternative Method using split, map, join
/*
hackerName.onmouseenter = () => {
    clearInterval(randomiseHackerName);
    let functionCounter = 0;
    let resetHackerName = setInterval(() => {
        functionCounter += 1;
        hackerName.innerText = hackerName.innerText.split("")
        .map((letter, index) => {
            if(index < functionCounter) return hackerName.dataset.name[index];
            else return letters[Math.floor(Math.random() * 26)]
        })
        .join("")
        if (functionCounter > hackerName.innerText.length) clearInterval(resetHackerName);
    }, 20);
}
*/
