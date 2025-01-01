// Selecting the container div - We'll create a 16x16 grid of divs inside of it
const container = document.querySelector(".container");

let divArray = [];

// Using a loop to create a 16x16 grid, inside the container div
for (let n = 0; n < 255; n++) {
    // We need to firstly create the divs
    const content = document.createElement("div");
    // giving each div their attribute
    content.style.width = "calc(100% / 16)";
    content.style.height = "calc(100% / 16)";
    content.style.border = "1px solid black";
    // We then need to place them inside of the relevant container div
    container.appendChild(content);
    // Place these into a grid via flexbox
    divArray.push(content);
}

container.style.display = "flex";
container.style.flexWrap = "wrap";

// setting up hover event, changes color of div when user hovers over the relevant div
container.addEventListener("mouseover", (e) => {
    if (e.target !== container) {
        e.target.style.backgroundColor = 'yellow';
    }
});

// Adding reset button functionality, resets divs and prompts user for amount of squares added
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    // Empties the previously used divArray
    divArray.forEach((div) => container.removeChild(div));
    divArray = [];

    // Allow the user to enter a value which will append the new grid
    // accept 1:100 whole numbers
    let numberEntry = prompt('Please enter a value for your new grid! (1-100): ');

    // Error handling strings

    // Error handling decimals 

    // loop creates new grid based on input 
    for (let n = 0; n < numberEntry; n++) {
        const newContent = document.createElement("div");
        newContent.style.width = "calc(100% / 16)";
        newContent.style.height = "calc(100% / 16)";
        newContent.style.border = "1px solid black";
        // Appended to previously emptied container div and array
        container.appendChild(newContent);
        divArray.push(newContent);
    }

})

// We need to revise how we handle/form the grid as this is currently broken upon a new grid being formed, revise the formula that's run when the user enters a new grid value
