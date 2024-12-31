// Selecting the container div - We'll create a 16x16 grid of divs inside of it
const container = document.querySelector(".container");

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
}

container.style.display = "flex";
container.style.flexWrap = "wrap";

